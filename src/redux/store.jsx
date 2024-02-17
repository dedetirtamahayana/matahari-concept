import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducers from "@/redux/login/slice";
import registerReducers from "@/redux/register/slice";
import profileReducers from "@/redux/profile/slice";
const rootReducer = combineReducers({
  login: loginReducers,
  register: registerReducers,
  profile: profileReducers,
});

export default configureStore({
  reducer: rootReducer,
});
