// import Card from "../components/Card"
import "./CardList.scss";

import Card from "./Card";
import { comments } from "../lib/dummyData/comments";

const CardList = () => {
  return (
    <ul className="cardlist">
      {comments.map((comment) => (
        <li key={comment.id}>
          <Card comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
