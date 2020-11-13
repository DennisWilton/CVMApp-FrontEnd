import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Noticia from './components/Noticia';
import { AccountControl, Button, Input, LinhaHorizontal, InputGroup, Title, Wrapper, Popup } from './Home.style';
import anime from 'animejs';
import MaskedInput from 'react-text-mask';

let timeline = {};

export default function Home(){
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const [state, setState] = useState({})
    const dispatch = useDispatch();
    const title = useRef();

    useEffect( _ => {
        if(auth.user){
            history.replace('/profile')
        }
    }, [auth])

    useEffect(() => {
        
    }, [state.isErro, state.erro])

    const handleCPF = function(e){
        e.persist();
        setState(state => ({...state, cpf: e.target.value}))
    }
    const handlePassword = function(e){
        e.persist();
        setState(state => ({...state, password: e.target.value}))
    }
    const handleLogin = function(){
        dispatch({type: 'AUTH.LOGIN', payload: { cpf: state.cpf, password: state.password }, history, setState});
    }
    
    return <>
    {state.isErro && <ErrorPopup setState={setState}>
        {state.erro}
    </ErrorPopup>}
    <Wrapper>
        <Title style={{marginBottom: 15}}>Novidades</Title>
        <Noticia></Noticia>
        <LinhaHorizontal></LinhaHorizontal>
        <Title ref={title} style={{textAlign: `center`, marginTop: -20, marginBottom: 10}}>Entre com seu CPF e senha</Title>
        <InputGroup>
            <MaskedInput className="myInput" name="cpf" 
                mask={[/\d/, /\d/, /\d/,'.',/\d/, /\d/, /\d/,'.',/\d/, /\d/, /\d/,'-',/\d/,/\d/]}
                onBlur={handleCPF}
                inputMode="numeric"
                autoComplete="off"
                ></MaskedInput>
            {/* <Input onChange={handleCPF}></Input> */}
            <input className="myInput" onChange={handlePassword} type="password"></input>
        </InputGroup>
        <Button style={{marginTop: 20, marginBottom: 15}} onClick={handleLogin}>Entrar</Button>
        <AccountControl><a onClick={() => history.push('register')}>Registrar</a> | <a onClick={() => history.push('recoveryPassword')}>Esqueci minha senha</a></AccountControl>
    </Wrapper>
    </>
}



function ErrorPopup({children, setState, ...props}){

    const popup = useRef();
    
    useEffect(() => {
        if(timeline.pause) timeline.pause();
         timeline = anime.timeline({endDelay: 0, complete: () => {
            setState(state => ({...state, isErro: false}))
        }}); 
        
        timeline.add({targets: popup.current,
            opacity: [0, 1],
            translateY: [-100, 0],
            
            
        })

        timeline.add({
            targets: '#progressbar',
            width: [`100%`, `0%`],
            duration: 5000,
            easing: `easeInOutQuad`
        }, 0)
    }, [])
    
    return <>
        <Popup ref={popup}>{children}
            <div id="progressbar"/>
        </Popup>
    </>
}