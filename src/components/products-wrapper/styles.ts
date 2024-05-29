import styled from "styled-components";

export const Container = styled.div`
  gap: 2rem;
  margin-top: 4rem;
  max-width: 1200px;
  display: grid;
  align-items: center;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
