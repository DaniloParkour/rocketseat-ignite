import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  //Is a function that receive a boolean and not return value
  onSetIsNewTransactionModalOpen: (value: boolean) => void;
}

export function Header({ onSetIsNewTransactionModalOpen }: HeaderProps) {

  //Function handleSetOpenNewTransactionModal moved to App.tsx. This component can
  //receive the function by props to call in a other context

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={() => onSetIsNewTransactionModalOpen(true)}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}
