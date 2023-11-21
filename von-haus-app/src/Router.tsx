import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Login from "./components/fragments/Login";
import Home from "./components/pages/Home";
import Ejemplares from "./components/pages/Ejemplares";
import Blog from "./components/pages/Blog";
import Galeria from "./components/pages/Galeria";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejemplares" element={<Ejemplares />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/publicar" element={<Dashboard />} />
        </Routes>
    )
}

export default Router;