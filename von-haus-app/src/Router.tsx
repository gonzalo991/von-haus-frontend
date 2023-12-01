import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Login from "./components/fragments/Login";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Galeria from "./components/pages/Galeria";
import Detalle from "./components/pages/Detalle";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/detalle" element={<Detalle />} />
            <Route path="/admin/publicar" element={""} />
            <Route path="/admin/listar" element={""} />
            <Route path="/admin/galeria" element={""} />
            <Route path="/admin/eliminar" element={""} />
        </Routes>
    )
}

export default Router;