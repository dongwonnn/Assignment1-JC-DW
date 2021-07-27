import { styled } from "styled-components";

export const CardWrapper = styled.div`
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

const Card = ({ comment }) => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

export default Card;
