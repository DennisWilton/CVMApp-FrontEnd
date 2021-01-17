import React from 'react';
import {Oficina as Wrapper} from './Oficina.style';

export default function Oficina({...props}){
    return <Wrapper color="white">
        <div className="block"></div>
        <span className="oficina-item-text">{props.text}</span>
    </Wrapper>
}