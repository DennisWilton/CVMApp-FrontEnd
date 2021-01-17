import createSagaMiddleware from 'redux-saga'
import { all, call } from 'redux-saga/effects';
import { main } from './main';

//auth
import authRegister from './auth/register';
import authLogin from './auth/login';
import authLogout from './auth/logout';

//payment
import { main as CheckStatus} from './payment/status';


export function* mySaga(){
    yield all({
        main: call(main), authRegister: call(authRegister), authLogin: call(authLogin), authLogout: call(authLogout), CheckStatus: call(CheckStatus)})
}

export default createSagaMiddleware();