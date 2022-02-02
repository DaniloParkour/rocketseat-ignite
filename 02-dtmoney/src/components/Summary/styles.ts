import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); //equals "1fr 1fr 1fr"
  gap: 2rem; //Space between grid elements
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
      display: block; //default value for <strong> is "inline"
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }

  }
`;
