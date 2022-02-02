import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean,
  onSetOpenModal: (value: boolean) => void
}

export function NewTransactionModal({ isOpen, onSetOpenModal} : NewTransactionModalProps) {
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
        <input placeholder="Categoria" />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}