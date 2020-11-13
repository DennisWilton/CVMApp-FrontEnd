import createSagaMiddleware from 'redux-saga'
import { all, call } from 'redux-saga/effects';
import { main } from './main';
import authRegister from './auth/register';
import authLogin from './auth/login';

export function* mySaga(){
    yield all({
        main: call(main), authRegister: call(authRegister), authLogin: call(authLogin)})
}

export default createSagaMiddleware();