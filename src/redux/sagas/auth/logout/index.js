import { gql, useQuery } from '@apollo/client';
import { all, takeEvery, delay, put} from 'redux-saga/effects';
import setLoadingMessage from 'redux/actions/main/setLoadingMessage';


export function* LOGOUT(action){
    localStorage.removeItem('__authtoken');
    localStorage.removeItem('__username');
}

export default function* main(){
    yield takeEvery('AUTH.LOGOUT', LOGOUT);
}