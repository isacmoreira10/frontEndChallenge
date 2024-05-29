import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;

  border: 1px solid transparent;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 260px;
`;

export const ImageContainer = styled.div`
  position: unset !important;
  width: 100%;
`;

export const ImageProduct = styled.image`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

export const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  gap: 1rem;
`;

export const Button = styled.button`
  display: inline-flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100%;
  height: 2.5rem;

  background-color: #0f52ba;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: rgba(255, 255, 255, 1);

  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 1rem;
`;

export const Price = styled.div`
  display: inline-flex;
  gap: 0.1rem;
  font-size: 1rem;
  padding: 0.2rem;
  border-radius: 5px;
  white-space: nowrap;
  padding: 0.4rem;
  background-color: black;
  color: #ffffff;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 0.9rem;
  letter-spacing: -1px;
`;

export const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.2rem;
`;

export const Description = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 0.8rem;
  color: gray;
`;

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 1.2rem;
  gap: 1rem;
`;
