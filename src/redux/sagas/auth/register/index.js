import { gql, useQuery } from '@apollo/client';
import { all, takeEvery, delay, put} from 'redux-saga/effects';
import {client} from 'index';
import strapi from 'api/strapi';

export function* RegisterUser(action){

    const {payload, history} = action;

    yield put({type: 'SET_TITLE', title: `Registrando ${action.payload.name.split(" ")[0]}...`});

    yield delay(500);
    try {

        yield strapi.post('/auth/local/register', {
            username: payload.name,
            email:    payload.mail,
            password: payload.password, 
            senha:    payload.password,
            cpf:      payload.cpf
        })
        .catch( error => {
            console.log("Erro STRAPI", error.response)
            throw new Error(error)
        });

        // const response = yield client.mutate({
        //     mutation: gql`
        //         mutation CreateUser($userInput: UserInput!) {
        //             createUser(data: $userInput){ name }
        //         }
        //     `, variables: { 
        //         userInput: {
        //             name: payload.name,
        //             email: payload.mail,
        //             password: payload.password,
        //             cpf: payload.cpf,
        //             church: payload.church
        //         }
        //     }
        // })

        yield put({type: 'SET_TITLE', title: `Sucesso!`});
        history.push("/profile");
        
    } catch(e){
        console.log(e.response || e);
        yield put({type: 'SET_TITLE', title: `Erro inesperado!`});
        yield put({type: 'REGISTER.ERROR', title: `Registrando ${action.payload.name.split(" ")[0]}...`});
    }
    
    // yield put({type: 'SET_TITLE', title: `Encontrados ${users.length} usuários.`});

}

export default function* main(){
    yield takeEvery('REGISTER.SEND_DATA', RegisterUser);
}