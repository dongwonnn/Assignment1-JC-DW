import "./Card.scss";

const Card = ({ comment }) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default Card;
