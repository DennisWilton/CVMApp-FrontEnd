import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, StatusBadge, StatusBadgeWithRefreshBtn } from './PaymentStatus.style';
import {FontAwesomeIcon as FA} from '@fortawesome/react-fontawesome';
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

export default function PaymentStatus({refreshable = false, ...props}){
    const pmtState = useSelector(state => state.payment);
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);
    const [state, setState] = useState({});

    function update(text, color, canRefresh = false){
        setState(state => ({...state, text, color, canRefresh}));
    }

    function refresh(){
        if(!pmtState.lastData || ((new Date().getTime()) - pmtState.lastData)/1000 >= 3 ) dispatch({type: 'PMT.CHECK_STATUS'})
        else console.log("Teste", ((new Date().getTime()) - pmtState.lastData)/1000/60, pmtState.lastData)
    }

    useEffect(() => {
        switch(pmtState.actualStatus){
            case '3':
            case 3:
                update('Confirmado', '#195');
                break;
            case '1':
            case 1:
                update('Aguardando pagamento', '#159', true);
                break;
            case '0':
            case 0:
                update('Não realizada ainda', '#955', true);
                break;
            case '7':
            case 7:
                update('Cancelada', '#c00', true);
                break;
            case '4':
            case 4:
                update('Verificado', '#195');
                break;
            case -1:
            case '-1':
                update('Carregando...', '#8b8b8b', true);
                break;
            case -2:
            case '-2':
                update('Erro imprevisto', "#a44");
                break;
            default:
                update('Status Desconhecido', '#8b8b8b')
        }
    }, [pmtState.actualStatus])

    if(refreshable){
        return <Wrapper>
            {state.canRefresh 
            ? <StatusBadgeWithRefreshBtn onClick={refresh} color={state.color}><div><FA icon={faSyncAlt}/></div><div>{state.text}</div></StatusBadgeWithRefreshBtn> 
            : <StatusBadge color={state.color}>{state.text}</StatusBadge>}
        </Wrapper>
    }
    
    return <Wrapper>
        <StatusBadge color={state.color}>{state.text}</StatusBadge>
    </Wrapper>
}