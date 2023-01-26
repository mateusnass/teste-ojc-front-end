import React from "react";
import {  BrowserRouter as Routers,  Route,  Routes,  Navidate,} from "react-router-dom";
import PagFiltro from "./componentes/Filtragem/PagFiltro";
import Formulario from "./componentes/Formulario/Formulario";
import Login from "./componentes/Login/Index";
import { PageNotFound } from "./componentes/PageNotFound";


import { AuthPtovider } from "./contexts/auth";




//Obtendo os dados do formulário
const aoDigitar = (e) => {
  console.log(e.target);
}

const AppRoutes = () => {
  return (
    <Routers>
      <AuthPtovider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<PagFiltro  />} />
          <Route exact path="/incluir" element={<Formulario  />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthPtovider>
    </Routers>
  );
};

export default AppRoutes;
