import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsRequest } from "../reducers/comment";
import CardList from "../components/CardList";
// import useIntersect from "../lib/hooks/useIntersect";

const CommentPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { fetchLoading } = useSelector((state) => state.comment);

  // useEffect(() => {
  //   dispatch(fetchCommentsRequest(page));
  // });
  const [target, setTarget] = useState(null);

  useEffect(() => {
    let observer;
    const _onIntersect = ([entry]) => {
      if (entry.isIntersecting && !fetchLoading) {
        const nextpage = page + 1;
        console.log("도달");
        setPage(nextpage);
      }
    };
    if (target) {
      observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [page, target, fetchLoading]);

  useEffect(() => {
    dispatch(fetchCommentsRequest(page));
  }, [dispatch, page]);

  return (
    <div>
      <CardList />
      <div ref={setTarget}>loading</div>
    </div>
  );
};

export default CommentPage;
