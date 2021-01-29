import { put, select, delay, takeLatest} from "redux-saga/effects";
import { getUserPaymentStatus } from '../../../api/rest/user';

export function* CHECK_STATUS(){
        if(!localStorage.getItem('__authtoken')) return;
        
        yield put({type: 'PMT.SET_LOADING', payload: true});

        yield put({type: 'PMT.SET_STATUS', payload: { actualStatus: -1 }});

        const user = yield select(state => state.auth.user);

        const paymentStatus = yield getUserPaymentStatus(user);

        if( !paymentStatus ) {
            yield put({type: 'PMT.SET_STATUS', payload: { status: 0, transactionCode: null }});
        } else {
            yield put({type: 'PMT.SET_STATUS', payload: paymentStatus});
        }
    
        yield put({type: 'PMT.SET_LAST_DATA', payload: new Date().getTime()});
        yield put({type: 'PMT.SET_LOADING', payload: false});
}


export function* main(){
    yield takeLatest('PMT.CHECK_STATUS', CHECK_STATUS);
}