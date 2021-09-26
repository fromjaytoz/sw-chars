import { List, Card } from "antd";
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const ListView = styled.div`
  background: black;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const ImageCard = styled(Card)`
  width: 100%;
  background: black;
  border: solid black 1px;
`;

export const CardTitle = styled(Title)`
  &.ant-typography {
    color: #ebdc1e;
  }
`;

export const CardList = styled(List)`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
