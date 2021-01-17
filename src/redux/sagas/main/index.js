import { all, takeEvery, delay, put} from 'redux-saga/effects';
import {client} from 'index';
import { gql } from '@apollo/client';
import setLoadingMessage from 'redux/actions/main/setLoadingMessage';

const VERIFY_TOKEN = (token) => gql`
    query VERIFY_TOKEN {
        verify_token(token: "${token}"){
            _id
            name
            cpf
            email
            token
            isConfirmado
        }
    }
`

export function* APPSTART(){
    try {
        if(!localStorage.getItem('__authtoken')) return;
        
        yield put({type: 'MAIN.SET_LOADING.ON'});
        yield put(setLoadingMessage(`Entrando como ${localStorage.getItem('__username').split(" ")[0]}...`))
        
        const token = localStorage.getItem('__authtoken');
        const result = yield client.query({query: VERIFY_TOKEN(token)})
        
        localStorage.setItem('__authtoken', result.data.verify_token.token)
        localStorage.setItem('__username', result.data.verify_token.name)
        
        yield put({type: 'MAIN.SET_LOADING.OFF'});
        yield put({type: 'AUTH.LOGGED', payload: result.data.verify_token});
        yield put({type: 'PMT.CHECK_STATUS'});
    }catch(e){

        yield put(setLoadingMessage(`Falha ao tentar fazer o login. Por favor, tente novamente.\n\n(${e.message})`))
        yield delay(2000);
        yield put({type: 'MAIN.SET_LOADING.OFF'});
        yield put({type: 'AUTH.LOGGED', payload: null});
    }

}

function* bye(){
    yield delay(2000);
    yield console.log("Bye bye!");
    yield put({type: 'SET_TITLE', title: 'Pronto!'});

}

export function* main(){
    yield takeEvery('MAIN.APP.START', APPSTART);
}