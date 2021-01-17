import React from 'react';
import { Wrapper } from './Loading.style';
import Lottie from 'react-lottie';
import animationPath from 'animations/payment/loading.json'

export default function Loading(props){
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    
    return <Wrapper>
        <Lottie style={{marginTop: `5vh`}} options={ defaultOptions } height={350} width={350} isStopped={false} isPaused={false}/>
        <p style={{marginTop: `5vh`}}>Por favor, aguarde.</p>
        <p>Estamos carregando alguns dados!</p>
        <p style={{marginTop: `5vh`, color: `rgb(63,190,130)`}}>{props.state.loadingStatus}</p>
    </Wrapper>
}