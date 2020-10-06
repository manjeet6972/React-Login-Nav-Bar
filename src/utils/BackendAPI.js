import Axios from "axios";
import {BACKEND_API_LOGIN_URL} from './AppConstant';

export const API_INSTANCE_LOGIN = Axios.create({
	baseURL: BACKEND_API_LOGIN_URL,
	method: "POST",
	headers: {
		'Content-Type':'application/json', 
	}
})
 
export const  LOGIN_API = "";
export const LOGIN_API_PAYLOAD = {username: 'manjeet', userpassword: 'manjeet'};

 

 