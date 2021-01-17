import React from 'react';
import {Modal, Row} from '../CardModal.style';
import MaskedInput from 'react-text-mask';

export default function CardInfo(props){
    const [state, setState] = props.parentState;

    const setInfo = function(info, value){

        switch(info){
            case 'number':
                value = value.match(/\d/g).join("");
            default:
                value = value;
        }
        
        setState(state => ({...state, card: {...state.card, [info]: value}}))
    }
    
    return <Modal>
        <button onClick={() => setState(state => ({...state, cardInfoModal: false}))} className="close">CANCELAR</button>

        <Row>
            <input placeholder="Nome do responsável do cartão"
            autoComplete="off"></input>
        </Row>
        
        <Row>
            <MaskedInput 
                mask={[/\d/, /\d/, /\d/,/\d/,' ',/\d/, /\d/, /\d/,/\d/,' ',/\d/, /\d/, /\d/,/\d/,' ',/\d/, /\d/, /\d/,/\d/]}
                onBlur={(e) => {setInfo('number', e.target.value)}}
                inputMode="numeric"
                autoComplete="off" placeholder="Número do Cartão"></MaskedInput>
        </Row>
        
        <Row>
            <MaskedInput placeholder="Validade"  
                mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                onBlur={(e) => {setInfo('')}}
                inputMode="numeric"></MaskedInput>
            <MaskedInput  
                mask={[/\d/, /\d/, /\d/]}
                onBlur={() => {}}
                inputMode="numeric" placeholder="CVV (Código de verificação)"></MaskedInput>
        </Row>
    </Modal>
}