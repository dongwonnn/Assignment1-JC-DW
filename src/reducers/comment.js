export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const fetchCommentsRequest = (data) => ({
  type: FETCH_COMMENTS_REQUEST,
  data, // 현재 페이지
});

export const fetchCommentsSuccess = (payload) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload, // 10개의 데이터
});

export const fetchCommentsFailure = (payload) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload, // error 목록
});

const initialStete = {
  comments: [],
  fetchDone: true,
  fetchError: null,
  fetchLoading: false,
  hasMoreComments: true,
};

const comment = (state = initialStete, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        fetchDone: false,
        fetchError: null,
        fetchLoading: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        hasMoreComments: action.payload.length !== 0,
        comments: state.comments.concat(action.payload),
        fetchDone: true,
        fetchError: null,
        fetchLoading: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        fetchDone: true,
        fetchError: action.payload,
        fetchLoading: false,
      };
    default:
      return state;
  }
};

export default comment;
