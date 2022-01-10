import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDatabase, ref, set, remove } from "firebase/database";
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { DB_REFRESH } from '../../store/actions'
import { debounce } from "debounce";

const CreateCategory = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)
    const dbrefresh = useSelector(state => state.prdoucts.dbRefresh)
    const [categoryInputs, setCategoryInputs] = React.useState([]);
    const [valueCategory, setValueCategory] = React.useState();
    const [categoryArr, setCategory] = React.useState([]);
    const [fileUrl, setFileUrl] = React.useState(null)

    React.useEffect(() => {
        const cat = categories.map((item) => {
            return { ...item, editMode: false }
        })
        setCategory(cat)
    }, [categories])

    const onFileChange = (e) => {
        const storage = getStorage();
        const file = e.target.files[0]
        const storageRef = refStorage(storage, `/icons/${file.name}`);
        uploadBytes(storageRef, file).then(() => {
            getDownloadURL(storageRef, file).then((url) => setFileUrl(url))
        });
        console.log(file)
    }
    const addCategory = () => {
        if (categoryInputs.length >= 1) {
            setCategoryInputs([])
        } else {
            setCategoryInputs(categoryInputs.concat(
                <li>
                    <input onChange={(e) => onFileChange(e)} type="file" />
                    <input onChange={(e) => setValueCategory(e.target.value)} type="text" />
                </li>));
        }

    }

    const editMode = (id) => {
        if (categoryArr.some(item => item.editMode === true)) {
            dispatch(DB_REFRESH(!dbrefresh))
        } else {
            const filtr = categoryArr.map(item => {
                if (item.id === id) {
                    item.editMode = !item.editMode
                }
                return item
            })
            setCategory(filtr)
        }

    }

    const closePanel = () => {
        setValueCategory()
        setCategoryInputs([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getDatabase();
        let id = Math.floor(Math.random() * 3000000)
        set(ref(db, 'categories/' + id), {
            id: id,
            icon: fileUrl,
            name: valueCategory,
        });
        dispatch(DB_REFRESH(!dbrefresh))
        closePanel()
    }

    const removeCategory = (key) => {
        const db = getDatabase();
        remove(ref(db, 'categories/' + key))
        dispatch(DB_REFRESH(!dbrefresh))
        closePanel()
    }

    const reviewCategory = (item, name) => {
        const db = getDatabase();
        set(ref(db, 'categories/' + item.id), {
            id: item.id,
            icon: item.icon,
            name: name,
        });
    }
    return (
        <div className="container">
            <div className="main__content">
                <div className="main__content--categories">
                    <div className="main__content-title">
                        Список категорий
                    </div>
                    <form onSubmit={handleSubmit} className="main__content--categories-list">
                        {
                            categoryArr.length ?
                                categoryArr.map(item => (
                                    <li>
                                        {item.editMode ?
                                            <input autoFocus={true} onChange={debounce((e) => reviewCategory(item, e.target.value), 200)} type="test" defaultValue={item.name} /> :
                                            item.name
                                        }

                                        <div className="control__container">
                                            <div onClick={() => editMode(item.id)} className="btn">
                                                <img src={item.editMode ? "/check-svgrepo-com.svg" : "/pencil-svgrepo-com.svg"} alt="rename" />
                                            </div>
                                            <div onClick={() => removeCategory(item.id)} className="btn">
                                                <img src="/remove-svgrepo-com.svg" alt="remove" />
                                            </div>
                                        </div>
                                    </li>
                                )) :

                                <li>Категорий не обнаружено</li>
                        }
                        {categoryInputs}
                        {valueCategory &&
                            <input type="submit" />
                        }
                    </form>
                    <div onClick={addCategory} className="add__category-btn">
                        +
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateCategory
