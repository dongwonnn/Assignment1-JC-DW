import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DEBOUNCE_DELAY,
  DEFAULT_PAGE,
  LOADING_MESSAGE,
  NETWORT_ERROR_MESSAGE,
} from "utils/constants";
import { CenterText } from "utils/styles/CenterText";
import { LoadingText } from "utils/styles/LoadingText";

import CommentLists from "components/CommentLists";

import { fetchCommentsRequest } from "reducers/comment";
import { throttle } from "utils/throttle";

const CommentPage = () => {
  const [page, setPage] = useState(DEFAULT_PAGE);
  const dispatch = useDispatch();
  const { hasMoreComments, fetchLoading, fetchError } = useSelector(
    (state) => state.comment
  );

  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      const nextPage = page + 1;
      setPage(nextPage);
    }
  }, [page]);

  useEffect(() => {
    if (hasMoreComments) {
      dispatch(fetchCommentsRequest(page));
    }
  }, [page, hasMoreComments, dispatch]);

  useEffect(() => {
    const onDebounceScroll = throttle(onScroll, DEBOUNCE_DELAY);

    window.addEventListener("scroll", onDebounceScroll);
    return () => {
      window.removeEventListener("scroll", onDebounceScroll);
    };
  }, [onScroll]);

  if (fetchError) {
    return <CenterText>{NETWORT_ERROR_MESSAGE}</CenterText>;
  }

  return (
    <>
      <CommentLists />
      {fetchLoading && <LoadingText>{LOADING_MESSAGE}</LoadingText>}
    </>
  );
};

export default CommentPage;
