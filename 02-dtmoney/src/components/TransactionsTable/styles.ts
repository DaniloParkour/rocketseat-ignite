import styled from "styled-components";

export const Contanier = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem; //0.5 rem between rows on vertical

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child { //The fisrt column is other color to text
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdrawn {
        color: var(--red);
      }

    }

  }
`;
