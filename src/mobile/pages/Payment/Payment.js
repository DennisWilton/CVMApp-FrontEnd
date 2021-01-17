import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { baseURL } from 'index';
import { runSaga } from 'redux-saga';
import { Title, LoadingWrapper } from './Payment.style';
import Loading from './Loading';
import Step0 from './steps/Step0';
import { useHistory } from 'react-router-dom';


function delay(timeout = 1000){
  return new Promise(function(resolve, reject){
    setTimeout( resolve, timeout)
  })
}

export default function Payment(){

    const history = useHistory();
    const { auth: {user}, ...reduxState } = useSelector(state => state);
    const [state, setState] = useState({isLoading: true, isHashReady: false, isError: false, step: 0, cardInfoModal: false})
    const dispatch = useDispatch();

    async function setError(e){
      setState(state => ({...state, isError: e}))
    }

    async function payCartao(){
      axios.post(`${baseURL}/buying/cartao`, {
        hash: state.hash.toString(),
        name: user.name.toString(),
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
      axios.post(`${baseURL}/buying/boleto`, {
        hash: state.hash.toString(),
        name: user.name.toString(),
        email: user.email.toString(),
        phone: { areaCode: '65', number: '981363139'},
        cpf: user.cpf.toString(),
        items: [{
          id: 'lote01',
          description: 'Inscrição de participante no 1º lote',
          amount: '230.00',
          quantity: '1.00'
        }]
      }, {headers: {'Authorization': `Bearer ${user.token}`}})
      .then( paymentLink => console.log("Link de pagamento:", paymentLink))
    }
    
    async function getSessionID(){
      return new Promise(async (res, rej) => {
        setState(state => ({...state, loadingStatus: 'Gerando sessão de usuário...'}))
        const {data} = await axios.get(`${baseURL}/buying/getSessionID`)


        if(!data.status) {
          setState(state => ({...state, loadingStatus: 'Problemas na comunicação com o PagSeguro...'}));
          await delay(5000);
          setState(state => ({...state, loadingStatus: 'Tente novamente mais tarde.'}));
          await delay(2000);
          history.replace('/profile');
          return;
        }
        
        setState(state => ({...state, loadingStatus: 'Gerando hash de segurança...'}))
        res(data.sessionID);
      })
    }

    async function toggleModal(){
      setState(state => ({...state, cardInfoModal: !state.cardInfoModal}));
    }

    async function run(){
      window.PagSeguroDirectPayment.setSessionId(await getSessionID());
      // console.log("Sessão de pagamento PagSeguro gerada com sucesso!")

      window.PagSeguroDirectPayment.onSenderHashReady(function(resposta){
        try {
          if(resposta.status == 'error') {
            console.log(resposta.message);
            return false;
          }
          setState(state => ({...state, isHashReady: true, hash: resposta.senderHash}))
        }catch(e){
          history.replace('/profile');
        }
      })


      window.PagSeguroDirectPayment.getPaymentMethods({
        amount: 230,
        success: function(result){
          setState(state => ({...state, isLoading: false}))
          console.log(result)
        }
      });
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