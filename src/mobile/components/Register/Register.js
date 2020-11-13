import React, { useEffect, useState } from 'react';
import {Wrapper, InputGroup, Button, Cancel, Row, Select} from './Register.style';
import MaskedInput from 'react-text-mask';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Register(props){

    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    

    const [state, setState] = useState({firstName: 'Jovem', step: 1});
    const [data, setData] = useState({church: {}});

    const handleName = (e) => {
        e.persist();
        e.target.value = /(([A-z]+)\s?)+/gi.exec(e.target.value)?.[0] || ''
        let firstName = e.target.value.trim().split(" ")[0];

        if(!firstName) {
            firstName = 'Jovem'
        }
        
        setState(state => ({...state, firstName}));
        setData(data => ({...data, name: e.target.value || ''}));
    }
    const handleMail = (e) => {
        e.persist();
        const {value} = e.target;
        setData(data => ({...data, mail: undefined}));
        if(value == ""){
           return setState(state => ({...state, isMailValid: undefined}))
        }

        const regex = /^[a-z0-9.]+@[a-z0-9]+(\.[a-z]+){1,2}$/i;

        if(regex.test(value)){
            setState(state => ({...state, isMailValid: true}))
            setData(data => ({...data, mail: value}));
        } else {
            setState(state => ({...state, isMailValid: false}))
        }
    }
    const handleCPF = (e) => {
        e.persist();
        setData(data => ({...data, cpf: e.target.value}))
    }


    const handlePassword = function(e){
        e.persist();
        if(!e.target.value){
            setState(state => ({...state, password: null}))
            return;
        }

        e.target.value = e.target.value.trim();

        setState(state => ({...state, password: e.target.value}))
    }
    const handlePasswordConfirm = function(e){
        e.persist();
        if(!e.target.value){
            setState(state => ({...state, passwordConfirm: null}))
            return;
        }

        e.target.value = e.target.value.trim();

        setState(state => ({...state, passwordConfirm: e.target.value}))
    }
    const handleChurchPastor = function(e){
        e.persist();
        if(!e.target.value){
            setData(data => ({...data, church: {...data.church, pastor: undefined}}))
            return;
        }

        setData(data => ({...data, church: {...data.church, pastor: e.target.value.trim()}}))
    }
    const handleChurchName = function(e){
        e.persist();
        if(!e.target.value){
            setData(data => ({...data, church: {...data.church, name: undefined}}))
            return;
        }

        setData(data => ({...data, church: {...data.church, name: e.target.value.trim()}}))
    }
    
    const nextStep = function(e){
        setState(state => ({...state, step: state.step + 1}))
    }
    const backStep = function(e){
        setState(state => ({...state, step: state.step - 1}))
    }
    const confirm = function(){

        if(!data.cpf || !data.name || !data.mail || !data.password || !data.church.pastor || !data.church.name ){
            return;
        }

        
        dispatch({type: 'REGISTER.SEND_DATA', payload: data, history});
        
    }
    
    useEffect(() => {
        if(state.passwordConfirm !== state.password) {
            setState((state) => ({...state, invalidPassword: true}))
            setData((data) => ({...data, password: undefined}))
        } else {
            setState((state) => ({...state, invalidPassword: false}))
            setData((data) => ({...data, password: state.password}))
        }
    }, [state.password, state.passwordConfirm])
    
    if(auth.user){
        return <Redirect to={'/'}/>
    }

    if(state.step == 1) {
        return <>
        <Wrapper>
            
        <h1>Olá, {state.firstName || 'Jovem'}!</h1>
        <p>Sua experiência começa agora.</p><p>Faça seu cadastro e garanta a sua participação no CVM#MorteVital!</p>
        <InputGroup canContinue={!!(data.name && data.cpf && data.mail)}>
            <div className="row" style={{marginTop: -20}}>
                <Cancel onClick={() => history.push('/')}>Cancelar inscrição</Cancel>
            </div>
            <div className="row">
                <input name="name" autoComplete="false" autoCapitalize="true" defaultValue={data.name} placeholder="Nome completo" onChange={handleName} />
            </div>
            <div className="row">
               <MaskedInput name="cpf" 
                mask={[/\d/, /\d/, /\d/,'.',/\d/, /\d/, /\d/,'.',/\d/, /\d/, /\d/,'-',/\d/,/\d/]}
                placeholder="CPF"
                onBlur={handleCPF}
                defaultValue={data.cpf}
                inputMode="numeric"
                autoComplete="off"
                ></MaskedInput>
            </div>
            <div className="row">
                <input name="mail" className={(state.isMailValid || state.isMailValid === undefined) ? '' : 'invalid'} defaultValue={data.mail} placeholder="E-mail" onChange={handleMail} />
            </div>
            <div
                className="row">
                <Button onClick={nextStep} style={{marginTop: 20}} color={!!(data.name && data.cpf && data.mail) ? '#159' : "#222"} textColor="#FFF">Continuar</Button>
            </div>
        </InputGroup>
        </Wrapper>
    </>}

    if(state.step == 2) {
        return <>
            <Button onClick={backStep} color={`#222`} textColor="#FFF">Voltar</Button>
            <InputGroup>
            <Row marginTop="20px">
                <input type='password' onChange={handlePassword}  defaultValue={data.password} placeholder="Senha"/>
            </Row>
            <Row>
                <input type='password' className={state.invalidPassword ? 'invalid' : ''} defaultValue={data.password} onChange={handlePasswordConfirm} placeholder="Confirmação da senha"/>
            </Row>
            <Row textColor="#FFF9" marginTop="20px">
                <span>{state.firstName}, informe-nos, por favor, a igreja que você congrega e o nome do seu pastor.</span>
            </Row>
            <Row textColor="#FFF9" marginTop="20px">
                <input onChange={handleChurchName} defaultValue={data.church.name} placeholder="Nome da igreja"/>
            </Row>
            <Row marginTop="0px">
                <input type="text" onChange={handleChurchPastor} defaultValue={data.church.pastor} placeholder="Nome do pastor"/>
            </Row>
            <Row marginTop="20px" >
               <Button onClick={confirm} color="#222" textColor="#FFF">Finalizar cadastro</Button>
            </Row>


        </InputGroup>
        </>
    }
}