import "./Formulario.css";
import { Form, Label, Input } from "reactstrap";


const aoSalvar = (evento) => {
  evento.preventDefault();
};




const Formulario = () => {
  return (
    <div>
      <section className="formulario">
        <Form onSubmit={aoSalvar}>
          <h2>Inclusão de cadastro</h2>
          <p>
            Olá! Por favor, complete as informaçoes para concluir o cadastro.
          </p>
          <br></br>

          <div>
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
          </div>
  
          <div>
            <Label for="Nome completo" className="nome">
              Nome
            </Label>

            <Input required={true} className="input-nome" placeholder="Nome" />
          </div>
          <div className="form-item">
            <div>
              <Label for="CPF" className="cpf">
                CPF
              </Label>
              <div>
                <Input
                  required={true}
                  className="input-cpf"
                  placeholder="000.000.000-00"
                />
              </div>
            </div>
            <div>
              
                <Label for="exempleDate" className="data-nasc">
                  Data nascimento
                </Label>
              
              <div>
                <Input
                  required={true}
                  className="input-data"
                  placeholder="date placeholder"
                  type="date"
                />
              </div>
            </div>
            <div>
              <div>
                <Label for="Telefone" className="tel">
                  Telefone
                </Label>
              </div>

              <Input className="input-tel" placeholder="(00) 9 0000-0000" />
            </div>
          </div>
          <button onSubmit={onclick} className="botaoCadastro">Enviar cadastro</button>
        </Form>
      </section>



    </div>
  );
};




export default Formulario;
