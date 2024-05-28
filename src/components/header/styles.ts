import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: #0f52ba;
`;

export const CountContainer = styled.button`
  display: inline-flex;
  position: absolute;
  right: 0;
  margin-top: 1rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  color: black;
  background-color: white;
`;

export const TitlePage = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 0.2rem;

  color: #ffffff;
`;

export const TitlePageSpan = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1rem;

  color: #ffffff;
  margin-left: -0.7rem;
`;
