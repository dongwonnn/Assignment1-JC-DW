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
  fetchDone: true,
  fetchError: null,
  fetchLoading: false,
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
        fetchDone: true,
        fetchError: null,
        fetchLoading: false,
        comments: state.comments.concat(action.payload),
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        fetchDone: true,
        fetchError: action.data,
        fetchLoading: false,
      };
    default:
      return state;
  }
};

export default comment;
