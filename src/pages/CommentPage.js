import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import CommentList from "../components/CommentList";

import { fetchCommentsRequest } from "../reducers/comment";
import { CenterText } from "../lib/styles/CenterText";
import { LoadingText } from "../lib/styles/LoadingText";

const CommentPage = () => {
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const dispatch = useDispatch();
  const { hasMoreComments, fetchLoading, fetchError } = useSelector(
    (state) => state.comment
  );

  useEffect(() => {
    if (inView && !fetchLoading && hasMoreComments) {
      dispatch(fetchCommentsRequest(page));

      const nextPage = page + 1;
      setPage(nextPage);
    }
  }, [inView, page, fetchLoading, hasMoreComments, dispatch]);

  if (fetchError) {
    return <CenterText>❌네트워크 오류❌</CenterText>;
  }

  return (
    <>
      <CommentList />
      <div ref={hasMoreComments && !fetchLoading ? ref : undefined} />
      {fetchLoading && <LoadingText>⏰Loading...⏰</LoadingText>}
    </>
  );
};

export default CommentPage;
