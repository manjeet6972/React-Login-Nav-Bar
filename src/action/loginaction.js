import { API_INSTANCE_LOGIN, LOGIN_API, LOGIN_API_PAYLOAD } from "../utils/BackendAPI";
import { LOGIN_COMPLETE, LOGIN_FAILURE } from "../utils/AppConstant";

export const doCognitoLogin = (username, userpassword) => {
  console.log("Login payload username & Password : ", username, userpassword);
  LOGIN_API_PAYLOAD.username = username;
  LOGIN_API_PAYLOAD.userpassword = userpassword;

  return dispatch => {
    return API_INSTANCE_LOGIN.post(LOGIN_API, JSON.stringify(LOGIN_API_PAYLOAD))
      .then(function (response) {
        // localStorage.setItem('username',  this.state.username);
        // localStorage.setItem('password', this.state.userpassword);
        console.log("Login Action : ", response.data)
        dispatch({ type: LOGIN_COMPLETE, payload: response });
      })
      .catch(function (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
      });
  }
}

