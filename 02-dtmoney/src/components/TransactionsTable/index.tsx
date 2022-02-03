import { Response } from "miragejs";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Contanier } from "./styles";

interface Transaction {
  id: number;
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

export function TransactionsTable() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(resp => setTransactions(resp.data.transactions))
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
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td className={t.type}>
                {
                  new Intl.NumberFormat("pt-BR",
                    {
                      style: "currency",
                      currency: "BRL"
                    }
                  ).format(t.amount)
                }
              </td>
              <td>{t.category}</td>
              <td>
                {
                  new Intl.DateTimeFormat("pt-BR").format(
                    Date.parse(t.createdAt)
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Contanier>
  );
}