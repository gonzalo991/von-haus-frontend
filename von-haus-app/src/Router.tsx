import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Login from "./components/fragments/Login";
import Home from "./components/pages/Home";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/publicar" element={<Dashboard />} />
        </Routes>
    )
}

export default Router;