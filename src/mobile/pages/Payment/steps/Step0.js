import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Title, Item, WhiteBox, Product, Buttons, Button} from '../Payment.style';
import CardInfo from './CardInfo';

export default function Step0({methods, parentState, ...props}){
    const { auth: {user}, ...reduxState } = useSelector(state => state);

    useEffect(() => {
        console.log(user)
    }, [])
    
    return <>

        {parentState[0].cardInfoModal && <CardInfo parentState={parentState}></CardInfo>}
    
        <Title>Confirmação de dados</Title>


        <Item>
            <span className="title">Nome completo:</span>
            <span className="value">{user.name}</span>
        </Item>

        
        <Item>
            <span className="title">CPF:</span>
            <span className="value">{user.cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, '$1.$2.$3-$4')}</span>
        </Item
        >
        <Item>
            <span className="title">E-mail:</span>
            <span className="value">{user.email}</span>
        </Item>

        <WhiteBox>
            <Product>
                <span className="description">Inscrição de participante</span>
                <span className="value">R$ 230.00</span>
            </Product>
            <Buttons>
                <Button onClick={methods.toggleModal} style={{gridColumn: `1/2`}}>Pagar com cartão de crédito</Button>
                <Button onClick={methods.payBoleto} style={{gridColumn: `3/4`}}>Pagar com boleto bancário</Button>
            </Buttons>
        </WhiteBox>
    </>
}