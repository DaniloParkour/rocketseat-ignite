import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto; //Centralize element on horizontal

  padding: 2rem 1rem 12rem;

  display: flex; //Enable flex element positions
  align-items: center; //Flex enable this configuration
  justify-content: space-between; //Flex enable this configuration

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      //Apply filter when element is over
      filter: brightness(0.9); //sepia, blur, ...
    }
    
  }

`;
