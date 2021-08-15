import { useSelector } from "react-redux";
import CommentList from "components/CommentList";
import styled from "styled-components";

const CommentLists = () => {
  const { comments } = useSelector((state) => state.comment);

  return (
    <CommentListsWrapper>
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentList comment={comment} />
        </li>
      ))}
    </CommentListsWrapper>
  );
};

export default CommentLists;

const CommentListsWrapper = styled.ul`
  width: 500px;
  margin: 33px auto;
`;
