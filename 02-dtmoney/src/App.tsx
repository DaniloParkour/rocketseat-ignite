// import styled from 'styled-components';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

//Create a styled component. Is a react component called <Title> equivalent to <h1> 
//with styles defined between "`"
/*const Title = styled.h1`
  color: #414690;
  font-size: 64px;
`;*/

//root is the root of index.html. This command configure to element with id=root 
//stay not interactible when modal is opened, just interacts to root when modal
//is closed
Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  return (
    <TransactionsProvider>
      <Header onSetIsNewTransactionModalOpen={setIsNewTransactionModalOpen}/>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onSetOpenModal={setIsNewTransactionModalOpen}
      />

      <Dashboard />
      <GlobalStyle />
      </TransactionsProvider>
  );
}
