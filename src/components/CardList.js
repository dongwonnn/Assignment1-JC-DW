import Card from "./Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CardListWrapper = styled.ul`
  width: 500px;
  margin: 33px auto;
`;

const CardList = () => {
  const { comments } = useSelector((state) => state.comment);

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
