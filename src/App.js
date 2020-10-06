import React from 'react';
import PageSpinner from './components/common/PageSpinner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const SignIn = React.lazy(() => import('./container/loginContainer'));
const SignUp = React.lazy(() => import('./components/auth/SignUp'));
const Dashboard = React.lazy(() => import('./components/home/Dashboard'));

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <React.Suspense fallback={<PageSpinner />}>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/login" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
          </React.Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
