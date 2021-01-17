import React from 'react';
import {Wrapper} from './Button.style';

export default function Button({block, ...props}){
    return <Wrapper onClick={props.onClick} block={block} p={props.p || '10px 15px'} bg={props.bg} color={props.color}>
        {props.children}
    </Wrapper>
}