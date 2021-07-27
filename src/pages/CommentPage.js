import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCommentsRequest } from "../reducers/comment";
import CardList from "../components/CardList";

const CommentPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  // 스크롤 도달하는 로직
  // setPage( page + 1) ;

  useEffect(() => {
    dispatch(fetchCommentsRequest(page));
  }, [dispatch, page]);

  return (
    <div>
      <CardList />
    </div>
  );
};

export default CommentPage;
