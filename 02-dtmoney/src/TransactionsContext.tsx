import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

/*interface NewTransaction {
  title: string,
  type: string,
  category: string,
  amount: number
}*/

//The interface above can be defined with Pick or Omit
// type NewTransaction = Pick<Transaction, "title" | "amount" | "type" | "category">;
// OR
type NewTransaction = Omit<Transaction, "id" | "createdAt">;

//ReactNode to component receive children like a <slot/> from VueJS
interface TransactionProviderProps {
  //Children is a ReactNode, is a content that can be placed between component open/close tags
  children: ReactNode;
}

//interface to used on state, array of transaction and a createTransaction function
interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: NewTransaction) => void;
}

export const TransactionsContext = 
                    createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children } : TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, []);

  function createTransaction(transaction: NewTransaction) {
    api.post("transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}