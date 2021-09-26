import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import { List, Card, Row } from "antd";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import { Typography } from "antd";

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
  const [cardData, setCardData] = useState({
    data: data,
    loading: false,
    hasMore: true,
  });

  const fetchData = () => {
    //for data fetching

    setCardData((prev) => {
      return { ...prev, data: prev.data.concat(data) };
    });
  };
  return (
    <InfiniteScroll
      dataLength={cardData.data.length}
      loader={<h1>Test</h1>}
      next={fetchData}
      hasMore={true}
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
