import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { loginReducer } from '../reducer/loginReducer';


const combinedReducer = combineReducers({
	login: loginReducer,
});

export default createStore(combinedReducer, applyMiddleware(thunk));