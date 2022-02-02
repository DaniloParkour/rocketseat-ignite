import Modal from 'react-modal';
import closeImf from '../../assets/close.svg';
import { Container } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: (value: boolean) => void
}

export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose(false)}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
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