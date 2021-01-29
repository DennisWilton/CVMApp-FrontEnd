import React, { useEffect, useState } from 'react';
import useStyles from './style';
import strapi from 'api/strapi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import delay from 'util/delay';
import {FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome';
import { faCopyright as faLoading, faHdd } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

export default function Boleto(props){

    const {user}              = useSelector(state => state.auth),
         
          [state, setState] = useState({isLoading: true, loadingMessages: ['Carregando...'], isError: false, errorMessages: []}),
          
          classes           = useStyles({props, state}),

          history           = useHistory();
    

    useEffect(() => {
        getPayments();
    }, [])



    async function getPayments(){
        strapi.secure.get('/pagamentos')
        .then( ({data}) => {
            setState(state => ({...state, payments: data.pagamentos, isLoading: false }))
        })
        .catch( err => {
            setState( state => ({...state, isError: true, errorMessages: ['Falha ao tentar buscar os pagamentos do usuário!']}))
        })
    }

    if(state.isLoading){
        return(<>
        <div className={classes.wrapper}>
                <h1 className={classes.title}>Meu histórico de solicitação de boleto</h1>
                <div className={classes.box}>
                    <h3><FA icon={faLoading} spin /> Só um minutinho, {user?.username?.split(" ")[0] || 'jovem'}...</h3>
                    <span>Estamos carregando suas solicitações... </span>
                </div>
            </div>
        </>)
    }

    if(state?.payments?.length == 0){
        return <>
            <div className={classes.wrapper}>
                <h1 className={classes.title}>Meu histórico de solicitação de boleto</h1>
                <div className={classes.box}>
                    <h3>Poxa, {user?.username?.split(" ")[0] || 'jovem'}...</h3>
                    <span>Aparentemente, você ainda não fez nenhuma tentativa de pagamento... :(</span>
                </div>
                <div className={classes.box}>
                    <button 
                        className={`${classes.btn} block`} 
                        onClick={() => history.push('/pagamento')}>Clique aqui para gerar um boleto</button>
                </div>
            </div>
        </>
    }
    
    return <>
        <div className={classes.wrapper}>
            <h1 className={classes.title}>Meu histórico de solicitação de boleto</h1>
            {state.payments.map( (payment, i) => <div key={i} className={classes.box}>
                <h4 style={{marginBottom: 10}}>Boleto bancário</h4>
                <span className={`code`} style={{marginBottom: 10}}>Criado {moment(state.payments?.[0]?.created_at).toNow(false)}</span>
                <span className={`code`}>{payment.transactionCode}</span>
                <span className={`link ${(i!=0) ? 'disabled' : ''}`}><FA icon={faHdd}/> <a target={i == 0 && "_blank"} href={i == 0 ? payment.paymentLink : '#'}>Baixar boleto</a></span>
            </div>)}
        </div>
    </>
}