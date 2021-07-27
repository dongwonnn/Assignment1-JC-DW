// import Card from "../components/Card"
import Card from "./Card";
import { comments } from "../lib/dummyData/comments";
import { styled } from "styled-components";

const CardListWrapper = styled.ul`
  width: 500px;
  margin: 33px auto;
`;

const CardList = () => {
  return (
    <CardListWrapper>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Card comment={comment} />
        </li>
      ))}
    </CardListWrapper>
  );
};

export default CardList;
