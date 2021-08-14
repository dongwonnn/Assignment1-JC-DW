import { useSelector } from "react-redux";
import Comment from "components/Comment";
import styled from "styled-components";

const CommentList = () => {
  const { comments } = useSelector((state) => state.comment);

  return (
    <CommentListWrapper>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </CommentListWrapper>
  );
};

export default CommentList;

const CommentListWrapper = styled.ul`
  width: 500px;
  margin: 33px auto;
`;
