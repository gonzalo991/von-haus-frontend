import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Galeria from "./components/pages/Galeria";
import Detalle from "./components/pages/Detalle";
import WriteArticle from "./components/pages/Dashboard/WriteArticle";
import AddToGallery from "./components/pages/Dashboard/AddToGallery";
import ArticlesTable from "./components/pages/Dashboard/ArticlesTable";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/admin/publicar" element={<WriteArticle />} />
            <Route path="/admin/listar" element={<ArticlesTable/>} />
            <Route path="/admin/galeria" element={<AddToGallery />} />
            <Route path="/admin/eliminar" element={""} />
        </Routes>
    )
}

export default Router;