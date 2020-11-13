import { gql, useQuery } from '@apollo/client';
import { all, takeEvery, delay, put} from 'redux-saga/effects';
import {client} from 'index';
import setLoadingMessage from 'redux/actions/main/setLoadingMessage';


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
        const response = yield client.query({query: gql`
            query Login{
                login( cpf: "${ payload.cpf }", password: "${ payload.password }" )
                {
                    name
                    cpf
                    email
                    password
                    token
                }
            }
        `})

        localStorage.setItem('__authtoken', response.data.login.token)
        localStorage.setItem('__username', response.data.login.name)

        yield put({type: 'MAIN.SET_LOADING.OFF'});
        yield put({type: 'AUTH.LOGGED', payload: response.data.login});

    }catch(e){
        console.error(e);
        yield put(setLoadingMessage('Falha ao tentar entrar.'));
        setState(state => ({...state, isErro: true, erro: e?.networkError?.result?.errors?.[0]?.message ?? e.message}))
        yield put({type: 'MAIN.SET_LOADING.OFF'});
    }

}

export default function* main(){
    yield takeEvery('AUTH.LOGIN', LOGIN);
}