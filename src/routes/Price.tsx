import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";
import PriceArticle from "../components/PriceArticle";
import { PriceData } from "./Coin";

const Container = styled.section`
  padding: 0px 4px;
  max-width: 480px;
  margin: 0 auto;
`;

interface PriceProps {
  coinId: string;
}

type priceAttrType = { key: string; value: string };

export const Price = ({ coinId }: PriceProps) => {
  const { isLoading, data } = useQuery<PriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId)
  );
  let priceAttr: priceAttrType[] = [];
  if (data?.quotes.USD) {
    const usd = data.quotes.USD;
    priceAttr = [
      { key: "Price", value: `$ ${usd.price.toFixed(2)}` },
      {
        key: "Percent changed in 1 hour",
        value: `${usd.percent_change_1h.toFixed(2)} %`,
      },
      {
        key: "Percent changed in 12 hour",
        value: `${usd.percent_change_12h.toFixed(2)} %`,
      },
      {
        key: "Market changed in 24 hour",
        value: `${usd.market_cap_change_24h.toFixed(2)} %`,
      },
    ];
  }
  return (
    <Container>
      {!isLoading &&
        data?.quotes.USD &&
        priceAttr.map(({ key, value }) => (
          <PriceArticle key={key} title={key} value={value} />
        ))}
    </Container>
  );
};
