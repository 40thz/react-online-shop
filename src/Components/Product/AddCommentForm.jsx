import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactStarsRating from 'react-awesome-stars-rating';
import { getDatabase, ref, set, update, get, orderByChild, query, equalTo } from "firebase/database";
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { SET_COMMENT } from '../../store/actions'

const AddCommentForm = ({ setFormIsActive }) => {
    const dispatch = useDispatch()
    const currentItem = useSelector(state => state.prdoucts.currentItem[0])
    const [rating, setRating] = React.useState(0)
    const [images, setImages] = React.useState([])

    const handleRating = (rate) => {
        setRating(rate)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getDatabase();
        const que = query(ref(db, 'comments'), orderByChild("id"), equalTo(parseInt(currentItem.id)))
        const dignity = e.target.dignity
        const flaws = e.target.flaws
        const comment = e.target.comment
        let id = Math.floor(Math.random() * 3000000)

        set(ref(db, 'comments/' + id), {
            id: currentItem.id,
            raiting: rating,
            comment: [
                {
                    name: dignity.placeholder,
                    value: dignity.value
                },
                {
                    name: flaws.placeholder,
                    value: flaws.value
                },
                {
                    name: comment.placeholder,
                    value: comment.value
                }
            ],
            files: images
        });

        get(que)
            .then((snapshot) => {
                let list = []
                let sum = 0
                snapshot.forEach(item => {
                    list.push(item.val())
                })
                dispatch(SET_COMMENT(list))
                
                const raitingsArr = list.map(comment => comment.raiting)

                raitingsArr.forEach(rate => sum += rate)

                update(ref(db, 'products/' + currentItem.id), {
                    raiting: sum / list.length
                })
            })


        for(let i = 0; i <= 2; i++){
            e.target[i].value = null
        }
        setRating(0)
        e.target[3].value = null
        setFormIsActive(false)
    }

    const onFileChange = (e) => {
        const storage = getStorage();
        const file = e.target.files
        let imagesArr = []
        for (let i = 0; i < file.length; i++) {
            const storageRef = refStorage(storage, `/commentImg/${file[i].name}`);
            uploadBytes(storageRef, file[i]).then(() => {
                getDownloadURL(storageRef, file[i])
                .then((url) => imagesArr.push(url))
                .then(() => setImages(imagesArr))
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className='addComment'>
            <div className="addComment-title">
                Мой отзыв о {currentItem.name}
            </div>
            <label>
                Общий рейтинг
                <ReactStarsRating
                    onChange={handleRating}
                    value={rating}
                    count={5}
                    primaryColor={'#1875f0'}
                    size={25}
                />

            </label>
            <label>
                <textarea placeholder={'Достоинства'} name="dignity" cols="30" rows="10"></textarea>
            </label>
            <label>
                <textarea placeholder={'Недостатки'} name="flaws" cols="30" rows="10"></textarea>
            </label>
            <label>
                <textarea placeholder={'Кмментарий'} name="comment" cols="30" rows="10"></textarea>
            </label>

            <label>
                Фотографии (необязательно)
                <input type="file" multiple onChange={(e) => onFileChange(e)} />
            </label>
            <div className="addComment-btns">
                <input type="submit" value="Отправить" />
                <input onClick={() => setFormIsActive(false)} type="button" value="Назад" />
            </div>

        </form>
    )
}

export default AddCommentForm
