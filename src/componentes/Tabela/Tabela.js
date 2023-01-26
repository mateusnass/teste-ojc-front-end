import "./Tabela.css";

function Tabela({ botao }) {
  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Data Cadastro</th>
            <th>Nome / Razão Social</th>
            <th>Cpf / Cnpj</th>
            <th>Ações</th>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="botoes">
              <div className="botaoAlterar">
                <button className="buttonAlt">Alterar</button>
                <button className="buttonExcl" type="submit">
                  <a href="" className="buttonAltA">
                    {" "}
                    Excluir{" "}
                  </a>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className="botaoAlterar">
                <button className="buttonAlt">Alterar</button>
                <button className="buttonExcl" type="submit">
                  <a href="" className="buttonAltA">
                    {" "}
                    Excluir{" "}
                  </a>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
