import React, { Fragment } from 'react'
import Card from './Card'
import Sidebar from './Sidebar'
function Home({ items, setProductId, filter, searchItem }) {
    React.useEffect(() => {
        document.title = 'Главная';
      }, [])
    return (
        <Fragment>
            <Sidebar filterCategory={filter} items={
                [
                    {
                        name: 'Все товары',
                        category: null,
                    },
                    {
                        name: 'Телефоны',
                        category: 'phone',
                    },
                    {
                        name: 'Планшеты',
                        category: 'tablet',
                    },
                    {
                        name: 'Компьютеры',
                        category: 'computer',
                    },
                    {
                        name: 'Ноутбуки',
                        category: 'laptop',
                    },
                    {
                        name: 'Часы',
                        category: 'clock',
                    }                   
                ]
            }
            />
            {
            searchItem ?
                <Card searchItem={searchItem} setProductId={setProductId} items={items} />
                : <span>Loading</span>}
        </Fragment>
    )
}

export default Home
