import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spin } from "antd";
import axios from "axios";

//Styling
import { ListView, CardList, CardTitle, ImageCard } from "./styled/Home-styled";

//Interfaces
interface CharData {
  name: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  height: string;
  eye_color: string;
  birth_year: string;
}
interface CardData {
  data: CharData[];
  loading: boolean;
  hasMore: boolean;
}

interface FetchedData {
  count: number;
  next?: string;
  previous?: string;
  results: CharData[];
}

const Home: React.FC = () => {
  const [next, setNext] = useState<any>(`https://swapi.dev/api/people/?page=1`);
  const [cardData, setCardData] = useState<CardData>({
    data: [],
    loading: false,
    hasMore: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    !next && setNext("https://swapi.dev/api/people/?page=1");
  }, [next]); //remove this is to end scroll cycle

  const fetchData = async () => {
    // if (!next) {
    //   setCardData((prev) => {
    //     return { ...prev, hasMore: false };   //uncomment this is to end scroll cycle
    //   });
    //   return;
    // }
    const { data } = await axios.get<FetchedData>(next);
    setNext(data?.next);
    if (cardData?.data?.length === 0) {
      await setCardData((prev) => {
        return { ...prev, data: data.results };
      });
    } else {
      setCardData((prev) => {
        return { ...prev, data: prev.data.concat(data.results) };
      });
    }
  };
  return (
    <InfiniteScroll
      dataLength={cardData?.data?.length}
      loader={
        <div style={{ overflow: "hidden" }}>
          <CardTitle data-testid="loading">Loading Server Data...</CardTitle>
          <Spin size="large" />
        </div>
      }
      next={fetchData}
      hasMore={cardData.hasMore}
      endMessage={
        <CardTitle level={3}>
          SWAPI's Character Data goes as far as here, stranger. Safe travels,
          and may the Force be with you.
        </CardTitle> //This does not display unless scroll cycle is ended. See above comments
      }
    >
      <ListView data-testid="home-page">
        <CardList
          grid={{ gutter: 0, xs: 1, sm: 1, md: 1, lg: 3, xl: 3, xxl: 3 }}
          dataSource={cardData.data}
          itemLayout="vertical"
          size="small"
          renderItem={(card: any, index: number) => (
            <ImageCard key={index}>
              <CardTitle underline level={3}>
                Name: {card.name}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Gender:
                </CardTitle>
                {card.gender}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Height:
                </CardTitle>
                {card.height}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Hair Color:
                </CardTitle>
                {card.hair_color}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Skin Color:
                </CardTitle>
                {card.skin_color}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Eye color:
                </CardTitle>
                {card.eye_color}
              </CardTitle>
              <CardTitle level={5}>
                <CardTitle level={4} italic>
                  Birth Year:
                </CardTitle>
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
