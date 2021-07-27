export const FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST";
export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";

export const fetchCommentsRequest = (data) => ({
  // data => page
  type: FETCH_COMMENTS_REQUEST,
  data,
});

export const fetchCommentsSuccess = (payload) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload, // 실질적으로 10개 데이터
});

export const fetchCommentsFailure = (data) => ({
  type: FETCH_COMMENTS_FAILURE,
  data, // error
});

const initialStete = {
  comments: [],
  fetchSuccess: null,
  fetchError: null,
  fetchLoading: false,
};

const comment = (state = initialStete, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: state.comments.concat(action.payload),
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default comment;
