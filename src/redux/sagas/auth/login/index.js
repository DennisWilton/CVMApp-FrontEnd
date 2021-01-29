import { gql, useQuery } from '@apollo/client';
import { all, takeEvery, delay, put} from 'redux-saga/effects';
import {client} from 'index';
import setLoadingMessage from 'redux/actions/main/setLoadingMessage';
import strapi from 'api/strapi';

export function* LOGIN(action){
    const {payload, history, setState} = action;

    setState(state => ({...state, isErro: false}))
    yield delay(0);

    if(payload.cpf == '' || payload.password == '' || payload.cpf == undefined || payload.password == undefined){
        setState(state => ({...state, isErro: true, erro: `Favor, preencher completamente todos os campos.`}))
        return;
    }

    yield put({type: 'MAIN.SET_LOADING.ON'});
    yield put(setLoadingMessage('Entrando...'))
    yield delay(100);
    try {
       const response = yield (strapi.post('/auth/local', {
            identifier: payload.cpf,
            password: payload.password
        })
        .then(response => {
          return response;
        })
        .catch(err => {
            throw err
        }));
        
        localStorage.setItem('__authtoken', response.data.jwt)
        localStorage.setItem('__username', response.data.user.username)

        strapi.updateSecure();

        yield put({type: 'MAIN.SET_LOADING.OFF'});
        yield put({type: 'AUTH.LOGGED', payload: response.data.user});
        yield put({type: 'PMT.CHECK_STATUS'});


    }catch(e){
        e.response.data.message.map( ({messages}) => {
            messages.map( ({message}) => {
                setState(state => ({...state, isErro: true, erro: message}))
            })
        })
        yield put(setLoadingMessage('Falha ao tentar entrar.'));
        yield put({type: 'MAIN.SET_LOADING.OFF'});
    }

}

export default function* main(){
    yield takeEvery('AUTH.LOGIN', LOGIN);
}