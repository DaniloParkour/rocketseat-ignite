import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  //handle for functions that is called by any user interaction to UI
  function handleSetOpenNewTransactionModal(value: boolean) {
    setIsNewTransactionModalOpen(value);
  }

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={() => handleSetOpenNewTransactionModal(true)}>
          Nova Transação
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={() => setIsNewTransactionModalOpen(false)}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
      </Content>
    </Container>
  )
}
