import styled from "styled-components";
import PropTypes from "prop-types";

const CommentList = ({ comment }) => {
  return (
    <CommentListWrapper>
      <dl>
        <dt>Comment Id</dt>
        <dd>{comment.id}</dd>
      </dl>
      <dl>
        <dt>Email</dt>
        <dd>{comment.email}</dd>
      </dl>
      <dl>
        <dt>Comment</dt>
        <dd>{comment.body}</dd>
      </dl>
    </CommentListWrapper>
  );
};

CommentList.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    postId: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default CommentList;

export const CommentListWrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  margin-bottom: 12px;

  & dl {
    font-size: 18px;
    display: flex;

    & dt {
      padding-right: 12px;
      padding-bottom: 12px;
      font-weight: bold;
    }
  }

  & dl:nth-last-child(1) {
    display: block;
    & dt {
      padding-bottom: 2px;
    }
  }
`;
