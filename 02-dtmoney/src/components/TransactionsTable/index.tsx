import { useEffect } from "react";
import { Contanier } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(resp => resp.json())
      .then(data => console.log(data))
  }, []);

  return(
    <Contanier>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/08/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawn">- R$1200,00</td>
            <td>Casa</td>
            <td>18/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Contanier>
  );
}