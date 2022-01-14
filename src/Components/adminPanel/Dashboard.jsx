import React from 'react'
import { Routes, Route } from "react-router-dom";
import CreateProduct from './CreateProduct';
import Sidebar from '../Sidebar'
import CreateCategory from './CreateCategory';

const Dashboard = () => {

    React.useEffect(() => {
        document.title = 'Админ панель'
    }, [])
    return (
        <div className="wrapper">
            <div className="dashboard">
                <div className="main__content__sidebar">
                    <Sidebar
                        items={[
                            {
                                name: "Общие настройки",
                                route: 'createproduct'
                            },
                            {
                                name: "Добавить товар",
                                route: 'createproduct'
                            },
                            {
                                name: "Управление категориями",
                                route: 'createcategory'
                            },
                        ]}
                    />
                </div>
                <div className="dashboard__content">
                    <Routes>
                        <Route path="createproduct" element={<CreateProduct />} />
                        <Route path="createcategory" element={<CreateCategory />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
