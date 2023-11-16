import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WriteArticle from './WriteArticle';
import ArticlesTable from './ArticlesTable';
import AddToGallery from './AddToGallery';
import Dashboard from './Dashboard';

const DashboardRouter: React.FC = () => {
    return (
        <Routes>
            <Route path='/admin' element={<Dashboard />} />
            <Route path="/publicar" element={<WriteArticle />} />
            <Route path="/listado" element={<ArticlesTable />} />
            <Route path='/agregarImagen' element={<AddToGallery />} />
        </Routes>
    )
}

export default DashboardRouter;