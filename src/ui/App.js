import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarDrawer } from "../components/NavBarDrawer";
import { EmpresaScreen } from "./empresa/EmpresaScreen";
import { NotFound } from "./Errors/NotFound";
import { HomeScreen } from "./home/HomeScreen";
import SignUp from "./sing-up/SignUp";
import * as React from 'react';
import { AuthProvider, LoginScreen } from "./login/LoginScreen";
import { RequireAuth } from "./login/LoginScreen";
import Form from "./vacantes/Form";

function App() {
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/solicitud" element={<Form />} />
                        <Route element={<NavBarDrawer />}>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/empresas" element={<EmpresaScreen />} />
                            <Route
                                path="/inventario"
                                element={
                                    <RequireAuth>
                                        <Inventario />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="/pendientes"
                                element={
                                    <RequireAuth>
                                        <Pendientes />
                                    </RequireAuth>
                                }
                            />
                        </Route>
                    </Routes>
                </AuthProvider>
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