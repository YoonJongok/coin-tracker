import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
`;

const ArticleItem = styled.div`
  border: ${(props) => props.theme.borderConfig};
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 8px;
  width: 50%;
  padding: 0.5em 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-right: none;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:last-child {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    font-size: 1.2rem;
  }
`;
interface PriceArticleProps {
  title: string;
  value: string;
}
const PriceArticle = ({ title, value }: PriceArticleProps) => {
  return (
    <Article>
      <ArticleItem>{title}</ArticleItem>
      {value.includes("-") ? (
        <ArticleItem style={{ color: "red" }}>{value}</ArticleItem>
      ) : (
        <ArticleItem style={{ color: "#2ecc71" }}>{value}</ArticleItem>
      )}
    </Article>
  );
};

export default PriceArticle;
