import React, { useState, useContext } from "react";
import { Form, Label, Input } from "reactstrap";
import "./Login.css";

import { AuthContext } from "../../contexts/auth";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, senha });

    login(email, senha);
  };

  return (
    <section className="pag-login">
      <Form onSubmit={handleSubmit}>
        <h2 className="titulo">LOGIN</h2>
        
        <div className="email">
          <div className="centro">
            <Label for="email">Usuário:</Label>
            <Input
              required={true}
              className="input-email"
              placeholder="Usuário"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="email">
          <div className="centro">
            <Label for="senha" className="senha">
              Senha:
            </Label>
            <Input
              required={true}
              className="input-senha"
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="botao-login" onClick={login}>
          <div style={{ color: "white" }}>Login</div>
        </button>
      </Form>
    </section>
  );
};

export default Login;
