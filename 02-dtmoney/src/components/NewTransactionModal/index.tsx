import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean,
  onSetOpenModal: (value: boolean) => void
}

export function NewTransactionModal({ isOpen, onSetOpenModal} : NewTransactionModalProps) {

  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onSetOpenModal(false)}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={() => onSetOpenModal(false)}>
        <img
          src={closeImg}
          alt="Fechar Modal"
          className="react-modal-close"
        />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />
        <TransactionTypeContainer>
          <RadioBox type="button" onClick={() => setType("deposit")}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" onClick={() => setType("withdrawn")}>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}