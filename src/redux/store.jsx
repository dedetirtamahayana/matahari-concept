import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "@/redux/login/slice";
import registerReducers from "@/redux/register/slice";
const rootReducer = combineReducers({
  login: loginReducers,
  register: registerReducers,
});

export default configureStore({
  reducer: rootReducer,
});
