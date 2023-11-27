import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import WriteArticle from './WriteArticle';
import ArticlesTable from './ArticlesTable';
import AddToGallery from './AddToGallery';

const DashboardRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/publicar" element={<WriteArticle />} />
            <Route path="/admin/listado" element={<ArticlesTable />} />
            <Route path='/admin/agregarImagen' element={<AddToGallery />} />
        </Routes>
    )
}

export default DashboardRouter;