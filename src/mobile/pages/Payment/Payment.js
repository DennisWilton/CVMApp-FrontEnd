import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baseURL } from 'index';
import { runSaga } from 'redux-saga';
import { Title, LoadingWrapper } from './Payment.style';
import Loading from './Loading';
import Step0 from './steps/Step0';
import { useHistory } from 'react-router-dom';
import strapi from 'api/strapi';

function delay(timeout = 1000){
  return new Promise(function(resolve, reject){
    setTimeout( resolve, timeout)
  })
}

export default function Payment(){

    const history = useHistory();
    const { auth: {user}, ...reduxState } = useSelector(state => state);
    const [state, setState] = useState({
      isLoading: true, 
      isHashReady: false, 
      isError: false, 
      step: 0, 
      cardInfoModal: false,
      lote: null
    })
    const dispatch = useDispatch();

    async function setError(e){
      setState(state => ({...state, isError: e}))
    }

    async function payCartao(){
      axios.post(`${baseURL}/buying/cartao`, {
        hash: state.hash.toString(),
        name: user.username.toString(),
        email: user.email.toString(),
        phone: { areaCode: '65', number: '981363139'},
        cpf: user.cpf.toString(),
        items: [{
          id: 'lote01',
          description: 'Inscrição de participante no 1º lote',
          amount: '230.00',
          quantity: '1.00'
        }]
      })
      .catch(e => {
        setError(e)
      })
    }
    
    async function payBoleto(){

      setState(state => ({...state, isLoading: true, loadingStatus: 'Gerando boleto...'}))

      strapi.secure.post(`/buying/payBoleto`, {
        hash: state.hash.toString(),
        userId: user.id
      })
      .then( data => history.replace('/boleto') )
      .catch( async error => {

        setState(state => ({...state, isLoading: true, loadingStatus: 'Falha ao gerar o boleto!'}))
        await delay(3000);
        
        history.replace('/profile')
      })
    }
    
    async function getSessionID(){
      return new Promise(async (res, rej) => {
        setState(state => ({...state, loadingStatus: 'Gerando sessão de usuário...'}))
        try{
          const response = await strapi.secure.get('/buying/getSessionID', {params: {userId: user.id}});
          setState(state => ({...state, loadingStatus: 'Gerando hash de segurança do usuário.'}))
          res(response.data.session.id)
        }catch(e){
          if(e.response && e.response.data) setState(state => ({...state, loadingStatus: e.response.data.message}))
          await delay(2000);
          return rej(e.response)
        }
      })
    }

    async function toggleModal(){
      setState(state => ({...state, cardInfoModal: !state.cardInfoModal}));
    }

    async function run(){
      try{

        strapi.secure.get('/buying/loteInfo')
        .then ( response => {
          setState(state => ({...state, lote: response.data}))
        })
        .catch( err => {
          setState( state => ({...state, isError: {message: 'Falha ao buscar informações do lote.' }}))
        } )

        window.PagSeguroDirectPayment.setSessionId(await getSessionID());
        
        await delay(1000);
        window.PagSeguroDirectPayment.onSenderHashReady(function(resposta){

          if(resposta.status == 'error') {
          setState(state => ({...state, loadingStatus: 'Erro do PagSeguro: Falha ao gerar o hash do usuário.'}));
          return false;
        }
        setState(state => ({...state, isLoading: false, isHashReady: true, hash: resposta.senderHash}))
      })

      }catch(e){
        history.replace('/profile')
      }
    }
    
    useEffect(() => {
      run();
    }, [])

    

   if(state.isError) return <>
    <div>
    {state.isError.message}
    </div>
    <button onClick={() => history.replace('/profile')}>Voltar</button>
    </>

    if(!user  || state.isLoading ) return <Loading state={state}/>


    if(state.step == 0) return <Step0 parentState={[state, setState]} methods={{payBoleto, payCartao, toggleModal}}></Step0>
}