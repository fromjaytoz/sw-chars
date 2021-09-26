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
  background: black;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const ImageCard = styled(Card)`
  width: 100%;
  background: black;
  border: solid black 1px;
`;

const CardTitle = styled(Title)`
  &.ant-typography {
    color: #ebdc1e;
  }
`;

const CardList = styled(List)`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const darthJarJar = {
  name: "Darth Jar Jar",
  gender: "Meesa male!",
  height: "Meesa jump high",
};

const Home = () => {
  const [next, setNext] = useState(`https://swapi.dev/api/people/?page=1`);
  const [jarJarBinks, setJarJarBinks] = useState(darthJarJar);
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
            <ImageCard>
              <CardTitle underline level={3}>
                Name: {card.name}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Gender:
                </CardTitle>{" "}
                {card.gender}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Height:
                </CardTitle>{" "}
                {card.height}{" "}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Hair Color:
                </CardTitle>{" "}
                {card.hair_color}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Skin Color:
                </CardTitle>{" "}
                {card.skin_color}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Eye color:
                </CardTitle>{" "}
                {card.eye_color}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Birth Year:
                </CardTitle>{" "}
                {card.birth_year}
              </CardTitle>
            </ImageCard>
          )}
        ></CardList>
      </ListView>
    </InfiniteScroll>
  );
};

export default Home;
