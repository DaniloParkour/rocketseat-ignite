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

//ReactNode to component receive children like a <slot/> from VueJS
interface TransactionProviderProps {
  //Children is a ReactNode, is a content that can be placed between component open/close tags
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children } : TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(resp => setTransactions(resp.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}