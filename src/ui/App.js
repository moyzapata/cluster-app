import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBarDrawer } from "../components/NavBarDrawer";
import { EmpresaScreen } from "./empresa/EmpresaScreen";
import { NotFound } from "./Errors/NotFound";
import { HomeScreen } from "./home/HomeScreen";
import EmpresasList from "./vacantes/Empresas";
import SignUp from "./sing-up/SignUp";
import * as React from 'react';
import { AuthProvider, LoginScreen } from "./login/LoginScreen";
import { RequireAuth } from "./login/LoginScreen";
import Form from "./vacantes/Form";
import FormBecarios from "./becarios/FormBecarios";
import InventarioScreen from "./inventario/InventarioScreen";
import { Account } from "./becarios/InfoUser";

function App() {
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/elijeEmpresa" element={<EmpresasList />} />
                        <Route path="/solicitud" element={<Form />} />
                        <Route path="/formBecarios" element={<FormBecarios />} />
                        <Route element={<NavBarDrawer />}>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/empresas" element={<EmpresaScreen />} />
                            <Route
                                path="/inventario"
                                element={
                                    <RequireAuth>
                                        <InventarioScreen />
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
                            <Route
                                path="/profile"
                                element={
                                    <RequireAuth>
                                        <Account />
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