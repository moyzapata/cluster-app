import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { NavBarDrawer } from "../components/NavBarDrawer";
import { EmpresaScreen } from "./empresa/EmpresaScreen";
import { NotFound } from "./Errors/NotFound";
import { HomeScreen } from "./home/HomeScreen";
import { LoginScreen } from "./login/LoginScreen";

function App() {
    return (
        <div>
            <BrowserRouter>
                {/* {location.pathname !== '/login' && <Navbar />} */}
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/empresas" element={<EmpresaScreen />} />
                    <Route path="/pendientes" element={<Pendientes />} />
                    <Route path="/inventario" element={<Inventario />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

function Pendientes() {
    return <h1>Pendientes vista</h1>
}

function Inventario() {
    return <h1>Inventario vista</h1>
}