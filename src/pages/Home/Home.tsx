import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { List, Card, Row } from "antd";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "antd";
import { useQuery } from "react-query";
import axios from "axios";

const { Title } = Typography;

const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },

  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },

  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },

  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
  {
    title: "Title 5",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },

  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
  {
    title: "Title 6",
  },
];

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
    data: data,
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
      console.log(data);
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
          renderItem={(card) => (
            <ImageCard title={`Name:`}>
              <Title level={5}>Height: </Title>
              <Title level={5}>Hair Color: Test</Title>
              <Title level={5}>Skin Color: Test</Title>
              <Title level={5}>Eye color: Test</Title>
              <Title level={5}>Birth Year: Test</Title>
              <Title level={5}>Name: Test</Title>
              <Title level={5}>Gender: Test</Title>
              <Title level={5}>Homeworld: Test</Title>
              <Title level={5}>Films: Test</Title>
            </ImageCard>
          )}
        ></CardList>
      </ListView>
    </InfiniteScroll>
  );
};

export default Home;
