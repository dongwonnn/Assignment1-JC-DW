import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRequest } from "../reducers/comment";
import CardList from "../components/CardList";
import { useInView } from "react-intersection-observer";

const CommentPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const { hasMoreComments, fetchLoading } = useSelector(
    (state) => state.comment
  );

  useEffect(() => {
    if (inView && !fetchLoading && hasMoreComments) {
      const nextPage = page + 1;
      setPage(nextPage);

      dispatch(fetchCommentsRequest(page));
    }
  }, [inView, page, fetchLoading, hasMoreComments, dispatch]);

  return (
    <>
      <CardList />
      <div ref={hasMoreComments && !fetchLoading ? ref : undefined} />
    </>
  );
};

export default CommentPage;
