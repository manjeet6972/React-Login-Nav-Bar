import { connect } from 'react-redux';
import { doCognitoLogin } from '../action/loginaction';
import login from '../components/auth/login';

const actionsToProps = {
  doCognitoLogin,
};

const stateToProps = currentState => {
  return {
    loginDetails: currentState.login.loginDetails,
  };
}

export default connect(stateToProps, actionsToProps)(login);