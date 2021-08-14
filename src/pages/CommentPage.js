import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { CenterText } from "utils/styles/CenterText";
import { LoadingText } from "utils/styles/LoadingText";

import CommentList from "components/CommentList";

import { fetchCommentsRequest } from "reducers/comment";

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

  /*
  //scroll event를 이용한 무한스크롤 구현
   useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [page]);
  */

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
