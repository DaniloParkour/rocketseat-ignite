import { Response } from "miragejs";
import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Contanier } from "./styles";

export function TransactionsTable() {

  const { transactions } = useContext(TransactionsContext);
  
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