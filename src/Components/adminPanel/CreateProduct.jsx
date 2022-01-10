import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux';
import { DB_REFRESH } from '../../store/actions'

const AddProduct = () => {
    const dispatch = useDispatch()
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

    const [galleryInputs, setGalleryInputs] = React.useState([]);
    const [specificatioInputs, setSpecification] = React.useState([]);

    const addImage = () => {
        setGalleryInputs(galleryInputs.concat(<input type="text" name="image" placeholder='URL' />));
    }

    const addSpecs = () => {
        setSpecification(specificatioInputs.concat(<div className="specific"><input type="text" name="spec" placeholder='Название' /> <input type="text" name="spec" placeholder='Характеристика' /></div>));
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let img = []
        let spec = []
        e.target.image.forEach(item => {
            img.push(item.value)
        })
        e.target.spec.forEach(item => {
            spec.push(item.value)

        })
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
                images: img,
                more: spec
            }
        });
        dispatch(DB_REFRESH(!dbrefresh))
    }

    return (
        <div className="container">
            <div className="main__content">
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
                                <input type="text" name="image" placeholder='URL' />
                                <input type="text" name="image" placeholder='URL' />
                                {galleryInputs}
                            </div>
                            <div onClick={addImage} className="plus">Добавить изображение</div>
                        </div>
                        <div style={{ marginLeft: 10 }} className="product_input">
                            <span>Характеристики</span>
                            <div className="specific">
                                <input type="text" name="spec" placeholder='Название' />
                                <input type="text" name="spec" placeholder='Характеристика' />
                            </div>
                            {specificatioInputs}
                            <div onClick={addSpecs} className="plus">Добавить характеристику</div>
                        </div>
                    </div>
                    <input type="submit" value='Добавить товар' />
                </form>
            </div>
        </div>
    )
}

export default AddProduct
