// import styled from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

//Create a styled component. Is a react component called <Title> equivalent to <h1> 
//with styles defined between "`"
/*const Title = styled.h1`
  color: #414690;
  font-size: 64px;
`;*/

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
