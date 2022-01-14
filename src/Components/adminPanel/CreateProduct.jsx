import React from 'react'
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux';
import { DB_REFRESH } from '../../store/actions'

const AddProduct = () => {
    const dispatch = useDispatch()
    const inputs = React.useRef()
    const [dataProduct, setDataProduct] = React.useState({
        name: '',
        logo: '',
        price: 0,
        desc: '',
        category: null,
        raiting: 3.4,
        brand: '',
        overview: '',
        specification: {
            images: [],
            more: []
        }
    })

    const [selectIsActive, setSelect] = React.useState(false)
    const categories = useSelector(state => state.category.categories)
    const dbrefresh = useSelector(state => state.prdoucts.dbRefresh)

    const handleSubmit = (e) => {
        e.preventDefault()
        const db = getDatabase();
        let id = Math.floor(Math.random() * 3000000)
        set(ref(db, 'products/' + id), {
            id: id,
            name: dataProduct.name,
            logo: dataProduct.logo,
            price: parseInt(dataProduct.price),
            description: dataProduct.desc,
            category: dataProduct.category,
            raiting: 3.4,
            brand: dataProduct.brand,
            overview: dataProduct.overview,
            specification: {
                images: dataProduct.specification.images,
                more: dataProduct.specification.more
            }
        });
        dispatch(DB_REFRESH(!dbrefresh))
    }

    const uploadImage = (file) => {
        const storage = getStorage();
        const storageRef = refStorage(storage, `/product/slider/${file.name}`);
        uploadBytes(storageRef, file).then(() => {
            getDownloadURL(storageRef, file).then((url) => setDataProduct({
                ...dataProduct, specification: {...dataProduct.specification,
                    more: [...dataProduct.specification.more],
                    images: [...dataProduct.specification.images, url]
                }
            }))
        });
    }
    React.useEffect(() => {
        console.log(dataProduct)
    }, [dataProduct])

    const addSpecification = () => {
      const inputsArr = []

        for(let i = 0; i < inputs.current.childNodes.length; i++){
            inputsArr.push(inputs.current.childNodes[i].value)
            inputs.current.childNodes[i].value = null
        }

        setDataProduct({
            ...dataProduct, specification: {
                more: [...dataProduct.specification.more, inputsArr[0], inputsArr[1]],
                images: [...dataProduct.specification.images]
            }
        })
    }
    return (
        <div >
            <div className="main__content-title">
                Добавить продукт
            </div>
            <form onSubmit={handleSubmit}>
                <div className="product_input">
                    <input onChange={(e) => setDataProduct({ ...dataProduct, name: e.target.value })} placeholder='Название товара' type="text" />
                </div>

                <div className="product_input">
                    <input onChange={(e) => setDataProduct({ ...dataProduct, logo: e.target.value })} placeholder='Превью изображение [URL]' type="text" />
                </div>

                <div className="product_input">
                    <input onChange={(e) => setDataProduct({ ...dataProduct, price: e.target.value })} placeholder='Цена' type="number" />
                </div>
                <div className="product_input">
                    <input onChange={(e) => setDataProduct({ ...dataProduct, desc: e.target.value })} placeholder='Описание товара' type="textarea" />
                </div>
                <div className="product_input">
                    <div onClick={() => setSelect(!selectIsActive)} className="select">
                        <div className="selection">
                            {dataProduct.category === null ? "Выберите категорию" : categories[dataProduct.category].name}
                        </div>
                        {selectIsActive &&
                            <div className="options">
                                {categories.map((item, i) => (
                                    <div key={i} onClick={(e) => setDataProduct({ ...dataProduct, category: i })} key={i} className="option">{item.name}</div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <div className="product_input">
                    <input onChange={(e) => setDataProduct({ ...dataProduct, brand: e.target.value })} placeholder='Брэнд' type="text" />
                </div>
                <div className="product_input">
                    <input onChange={(e) => setDataProduct({ ...dataProduct, overview: e.target.value })} placeholder='Обзор [URL]' type="text" />
                </div>
                <div className="specification__content">
                    <div className="product_input">
                        <span>Слайдер изображение</span>
                        <div className="slider__spec">
                            <input onChange={(e) => uploadImage(e.target.files[0])} type="file" name="image" placeholder='URL' />
                            <div>Слайдер изображение загружено: {dataProduct.specification.images.length}</div>
                        </div>
                    </div>
                    <div style={{ marginLeft: 10 }} className="product_input">
                        <span>Характеристики</span>
                        <div ref={inputs} className="specific">
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div onClick={addSpecification} className="plus">
                            Добавить
                        </div>
                    </div>
                </div>
                <input type="submit" value='Добавить товар' />
            </form>
        </div>
    )
}

export default AddProduct
