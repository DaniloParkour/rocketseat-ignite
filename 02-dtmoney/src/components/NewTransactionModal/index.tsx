import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: (value: boolean) => void
}

export function NewTransactionModal({ isOpen, onRequestClose} : NewTransactionModalProps) {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={() => onRequestClose(false)}
      >
        <h2>Cadastrar Transação</h2>
    </Modal>
  );
}