import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  align-self: center;
  color: #0e1013;
  font-size: 3rem;
  margin: auto;
`;
const GoBackButton = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px #0e1013 solid;
  border-radius: 8px;
  background-color: #2f3640;
  font-size: 1rem;
  text-align: center;
  align-self: center;
  &:hover {
    background-color: #171b1f;
    transition: 0.5s ease-in-out;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
const Div = styled.div`
  width: 2.8rem;
  height: 2.8rem;
`;
interface IHeaderProps {
  headerName: string | undefined;
}
export const Header = ({ headerName }: IHeaderProps) => {
  const history = useHistory();
  return (
    <SHeader>
      <GoBackButton onClick={() => history.goBack()}>Go back</GoBackButton>
      <Title>{headerName}</Title>
      <Div></Div>
    </SHeader>
  );
};
