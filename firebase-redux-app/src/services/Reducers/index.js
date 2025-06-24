import { combineReducers } from "redux";
import bookReducer from "./booksReducer";
import counterReducer from "./counterReducer";
import authReducer  from "./authReducer";

const rootReducer = combineReducers({
   bookReducer,
   counterReducer,
   authReducer
});

export default rootReducer;