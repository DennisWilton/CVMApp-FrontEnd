import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Title, Item, WhiteBox, Product, Buttons, Button} from '../Payment.style';
import CardInfo from './CardInfo';

export default function Step0({methods, parentState, ...props}){
    const { auth: {user}, ...reduxState } = useSelector(state => state);

    
    return <>

        {parentState[0].cardInfoModal && <CardInfo parentState={parentState}></CardInfo>}
    
        <Title>Confirmação de dados</Title>


        <Item>
            <span className="title">Nome completo:</span>
            <span className="value">{user.username}</span>
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
                <span className="description">Inscrição no {parentState[0]?.lote?.numero || '??'}º lote</span>
                <span className="value">R$ {parentState[0].lote.valor}</span>
            </Product>
            <Buttons>
                <p style={{textAlign: `justify`, fontSize: `0.75em`, color: `#777`}}>Para mais métodos de pagamento, entrar em contato com a diretoria do CVM.</p>
                <Button onClick={methods.payBoleto} style={{gridColumn: `3/4`}}>Pagar com boleto bancário</Button>
            </Buttons>
        </WhiteBox>
    </>
}