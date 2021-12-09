import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

interface ContainerProps {
  current: boolean;
}
interface IHeaderProps {
  headerName: string | undefined;
}
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

export const DarkModeBtn = styled.button`
  width: 2.8rem;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.borderConfig};
  border-radius: 8px;
  background-color: ${(props) => props.theme.bgColor};
  font-size: 1rem;
  text-align: center;
  align-self: center;
  &:hover {
    background-color: #171b1f;
    transition: 0.2s ease-in-out;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const LinkContainer = styled.span<ContainerProps>`
  visibility: ${(props) => (props.current ? "hidden" : "visible")};
  width: 2.8rem;
  height: 2.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.borderConfig};
  border-radius: 8px;
  background-color: ${(props) => props.theme.bgColor};
  font-size: 1rem;
  a {
    padding: 1rem;
    display: block;
  }
  &:hover {
    background-color: #171b1f;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

export const Header = ({ headerName }: IHeaderProps) => {
  const { pathname } = useLocation();
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const isDarkMode = useRecoilValue(isDarkAtom);
  const toggleBtn = () => setDarkAtom((prev) => !prev);

  return (
    <SHeader>
      <LinkContainer current={pathname === "/"}>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </LinkContainer>

      <Title>{headerName}</Title>
      <DarkModeBtn onClick={toggleBtn}>
        {isDarkMode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </DarkModeBtn>
    </SHeader>
  );
};
