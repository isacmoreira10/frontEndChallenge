import { styled } from "styled-components";

export const CountContainer = styled.button`
  display: inline-flex;
  position: fixed;
  right: 0;
  margin-top: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  color: black;
  background-color: white;
`;

export const Container = styled.div`
  background-color: rgba(15, 82, 186, 1);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;

  @media (min-width: 900px) {
    margin-left: 24rem;
  }

  @media (min-width: 1100px) {
    margin-left: 30rem;
  }

  @media (min-width: 1300px) {
    margin-left: 40rem;
  }

  @media (max-width: 800px) {
    margin-left: 4rem;
  }
`;

export const ContainerTitleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-height: 75vh;
  overflow-y: scroll;
`;

export const Title = styled.span`
  text-align: left;
  padding-left: 0.9rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2rem;
  color: rgba(255, 255, 255, 1);
`;

export const Close = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: black;
  color: rgba(15, 82, 186, 1);
  border-radius: 50%;
  font-size: 2rem;
  border: none;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.8rem;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1rem;
  color: rgba(44, 44, 44, 1);
`;

export const Quantify = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid;
  border-color: rgba(191, 191, 191, 1);
  border-radius: 4px;
`;

export const Number = styled.span``;

export const Minus = styled.span`
  border-right: 1px solid;
  border-color: rgba(191, 191, 191, 1);
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.3rem;
  height: 100%;
`;

export const Plus = styled.span`
  border-left: 1px solid;
  border-color: rgba(191, 191, 191, 1);
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.3rem;
  height: 100%;
`;

export const Value = styled.div`
  display: flex;
  gap: 0.1rem;
  font-size: 1rem;
  padding: 0.2rem;
  border-radius: 5px;
  white-space: nowrap;
  padding: 0.6rem;
  background-color: black;
  color: #ffffff;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 0.9rem;
  letter-spacing: -1px;
`;

export const TotalValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Total = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 0.9rem;
  color: rgba(255, 255, 255, 1);
`;

export const TotalValue = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 0.9rem;
  color: rgba(255, 255, 255, 1);
`;

export const ProductContainer = styled.div`
  padding: 1rem;
`;

export const Finalize = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 3.2rem;
  background-color: black;
  color: rgba(255, 255, 255, 1);

  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 0.9rem;
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
