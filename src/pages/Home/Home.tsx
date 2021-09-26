import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { List, Card, Row } from "antd";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "antd";
import { useQuery } from "react-query";
import axios from "axios";

const { Title } = Typography;

const ListView = styled.div`
  background: grey;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const ImageCard = styled(Card)`
  width: 100%;
`;

const CardList = styled(List)`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  const [next, setNext] = useState(`https://swapi.dev/api/people/?page=1`);
  const [cardData, setCardData] = useState({
    data: [],
    loading: false,
    hasMore: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (!next) {
      setCardData((prev) => {
        return { ...prev, hasMore: false };
      });
      return;
    }
    const { data } = await axios.get(next);
    setNext(data?.next);
    if (cardData?.data?.length === 0) {
      await setCardData((prev) => {
        return { ...prev, data: data.results };
      });
    } else {
      setCardData((prev) => {
        return { ...prev, data: prev.data.concat(data.results) };
      });
      console.log(cardData);
    }
  };
  return (
    <InfiniteScroll
      dataLength={cardData?.data?.length}
      loader={<h1>Test</h1>}
      next={fetchData}
      hasMore={cardData.hasMore}
      endMessage={<h1 style={{ color: "red" }}>oasjpodasjpdosj</h1>}
    >
      <ListView data-testid="home-page">
        <CardList
          grid={{ gutter: 0, xs: 1, sm: 1, md: 1, lg: 3, xl: 3, xxl: 3 }}
          dataSource={cardData.data}
          itemLayout="vertical"
          size="small"
          renderItem={(card: any) => (
            <ImageCard title={`Name: ${card.name}`}>
              <Title level={5}>Gender: {card.gender}</Title>
              <Title level={5}>Height: {card.height} </Title>
              <Title level={5}>Hair Color: {card.hair_color}</Title>
              <Title level={5}>Skin Color: {card.skin_color}</Title>
              <Title level={5}>Eye color: {card.eye_color}</Title>
              <Title level={5}>Birth Year: {card.birth_year}</Title>
            </ImageCard>
          )}
        ></CardList>
      </ListView>
    </InfiniteScroll>
  );
};

export default Home;
