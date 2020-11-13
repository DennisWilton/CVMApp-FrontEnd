import React from 'react';
import { useHistory } from 'react-router-dom';
import { Square, Wrapper } from './Opcao.style';


export default function Opcao(props){

    const history = useHistory();
    
    return <>
        <Wrapper onClick={() => history.push(props.href)}>
            <Square color={props.color}></Square>
            <span>{props.name}</span>
        </Wrapper>
    </>
}