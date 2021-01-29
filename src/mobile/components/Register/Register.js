import React, { useEffect, useRef, useState } from 'react';
import useStyles from './useStyles';
import {Form} from '@unform/web';
import strapi from 'api/strapi';
import delay from 'util/delay';


//Steps
import Inicial from './Steps/Inicial';
import Pessoais from './Steps/Pessoais';
import { useHistory } from 'react-router-dom';

let to;


export const RegisterContext = React.createContext();

export default function Register(props){
   
   const classes = useStyles()
   const [state, setState] = useState({step: 1, tryAgain: 3, isLoading: false, messages: ['Aguarde...',]}),
         formRef      = useRef(),
         history      = useHistory(),
         handleSubmit = async (data, tryAgain = 3, ...rest) => {
                            setLoading("Enviando dados...");

                            try {
                                const response = await strapi.post('auth/inscrever', data)

                                
                                setLoading("", false);
                                history.push('/');
                                
                            }catch(e){
                                console.log(e);
                                if(!e.response){
                                    setLoading(["Erro de conexão com o servidor."])
                                    await delay(2000);
                                    if(--tryAgain >= 0){
                                        setLoading([`Tentando novamente (${3 - tryAgain}/3)`])
                                        await delay(1000);
                                        handleSubmit(data, tryAgain, ...rest);
                                    }else{
                                        setLoading("", false);
                                    }
                                }else {
                                    setLoading(["Erro ao tentar inscrever-se.", e.response.data.message])
                                    await delay(1000);
                                    setLoading("", false);
                                }
                            }
                        };
   
   function setLoading(message = 'Carregando...', status = true){
       if(Array.isArray(message)) setState(state => ({...state, isLoading: status, messages: message}));
       else setState(state => ({...state, isLoading: status, messages: [message]}));
   }                   

   return (<>
   {state.isLoading && <>
   <div className={classes.loading}>
       {state.messages.map( message => <span>{message}</span>)}
       </div></>}
   <Form className={classes.form} ref={formRef} onSubmit={(data, ...rest) => handleSubmit(data, 3, ...rest)} >
       <Pessoais setLoading={setLoading} showStep={state.step == 1} form={formRef}/>
       <button className={`${classes.submit} ${classes.fullwidth}`} type="submit">Pronto</button>
   </Form></>)
}