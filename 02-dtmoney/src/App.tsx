// import styled from 'styled-components';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';

//Create a styled component. Is a react component called <Title> equivalent to <h1> 
//with styles defined between "`"
/*const Title = styled.h1`
  color: #414690;
  font-size: 64px;
`;*/

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  return (
    <>
      <Header onSetIsNewTransactionModalOpen={setIsNewTransactionModalOpen}/>

      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={() => setIsNewTransactionModalOpen(false)}
        >
          <h2>Cadastrar Transação</h2>
      </Modal>

      <Dashboard />
      <GlobalStyle />
    </>
  );
}
