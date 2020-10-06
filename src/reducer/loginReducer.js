import { LOGIN_COMPLETE, LOGIN_FAILURE } from "../utils/AppConstant";

const initState = {
  loginDetails: { isDone: false, detail: undefined, error: "" },
}

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_COMPLETE:
      console.log("Login Reducer", action.payload)
      return {
        ...state,
        loginDetails: { isDone: true, detail: action.payload.data, error: undefined },
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loginDetails: { isDone: true, detail: undefined, error: action.payload }
      };
    default:
      return { ...state };
  }
}