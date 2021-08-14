import { combineReducers } from "redux";

import comment from "reducers/comment";

const rootReducer = combineReducers({
  comment,
});

export default rootReducer;
