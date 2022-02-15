import { Route, Routes, Redirect, BrowserRouter } from "react-router-dom";
import * as React from 'react';
import { HomeScreen } from "../ui/home/HomeScreen";
import { LoginScreen } from "../ui/login/LoginScreen";
import { EmpresaScreen } from "../ui/empresa/EmpresaScreen";
import { NotFound } from "../ui/Errors/NotFound";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/empresas" element={<EmpresaScreen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default Routes;