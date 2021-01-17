import { combineReducers } from "redux";
import main from './main';
import auth from './auth';
import payment from './payment';

export default combineReducers({payment, auth, main})