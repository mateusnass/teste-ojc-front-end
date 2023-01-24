import "./PagFiltro.css";
import "../Tabela/TabelaUser";
//import TabelaForm from "../Tabela/TabelaUser";

import { Form, Label, Input } from "reactstrap";
import React, { useState } from "react";

const PagFiltro = () => {
  return (
    <div>
      <div>
        <Form className="form-principal">
          <div>
            <div className="textr">
              <h4 className="text-filter">Filtro</h4>
            </div>
            <div className="textradio">
              <input
                type="radio"
                name="gender"
                value="1"
                className="inputRadio"
                style={{ backgroundColor: "white" }}
              />
              <label>Física</label>
              <input
                type="radio"
                name="gender"
                value="0"
                className="inputRadio"
              />
              <label>Jurídica</label>
            </div>
            <div className="label-input">
              <div className="label-input" style={{ flexDirection: "column" }}>
                <Label for="Nome completo" className="nome">
                  Data Cadastro
                </Label>

                <Input
                  className="input-nomeData"
                  placeholder="Nome"
                  type="date"
                />
              </div>
              <div className="label-input" style={{ flexDirection: "column" }}>
                <Label for="Nome completo" className="nome">
                  Nome / Razão Social
                </Label>

                <Input className="input-nomeFiltro" placeholder="Nome" />
              </div>
              <div className="label-input" style={{ flexDirection: "column" }}>
                <Label for="Nome completo" className="nome">
                  Cpf / Cnpj
                </Label>

                <Input className="input-cpfFiltro" placeholder="CPF/CNPJ" />
              </div>
            </div>
          </div>

          <div>
            <div className="botao-filtro">
              <button className="buttonFil">Filtrar</button>
              <button className="buttonFil" type="submit">
                <a href="/incluir" className="buttonFilA">
                  {" "}
                  Incluir{" "}
                </a>
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PagFiltro;
