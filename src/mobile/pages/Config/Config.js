import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Title, Button, Wrapper, User, Oficina, StatusBadge, Status, Help } from './Config.style';
import OficinaItem from './components/Oficina/Oficina';
import axios from 'axios';
import { baseURL } from 'index';
import PaymentStatus from 'mobile/components/PaymentStatus/PaymentStatus';

const oficinas = ["Sonoplastia", "Evangelismo para crianças", "Finanças à luz da bíblia", "Liderança", "Moda evangélica", "Tecnologia aplicada às missões"]


export default function Config({...props}){
    const { auth: {user}, ...reduxState } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(!reduxState.payment.lastData || ((new Date().getTime()) - reduxState.payment.lastData)/1000/60 >= 10 ){
            dispatch({type: 'PMT.CHECK_STATUS'});
        }
    }, [])
    
    if(!user) return <>Loading</>
    
    return (<>
        <Wrapper>
            <Row>
                <Title>CONFIGURAÇÕES</Title>
                <Button onClick={() => history.replace("/profile")} color="#2e2e2e" textColor="#a7a7a7">VOLTAR</Button>
            </Row>
            <Row>
                <User>
                    <span className="user-name">{user.username}</span>
                    <span className="user-email">{user.email}</span>
                </User>
            </Row>
            <Row>
                <Button style={{width: `100%`}} color="#FFFFFF09" textColor="#FFF">Alterar a senha</Button>
            </Row>
            <Row style={{marginTop: 10}}>
                <Button onClick={() => dispatch({type: `AUTH.LOGOUT`})} style={{width: `100%`}} color="#600" textColor="#FFF">Deslogar</Button>
            </Row>
            <Row style={{marginTop: 30}}>
                <Oficina>
                    <span className="label">Opção de oficina:</span>
                    <div className="oficina-carousel">
                        {oficinas.map( (oficina, key) => <OficinaItem key={key} text={oficina}></OficinaItem>)}
                    </div>
                </Oficina>
            </Row>
            <Row style={{marginTop: 40}}>
                <Status>
                    <span className="status-label" style={{whiteSpace: 'nowrap'}}>Status da inscrição:</span>
                    <div>&nbsp;</div>
                    <PaymentStatus refreshable/>
                </Status>
            </Row>
            <Row style={{marginTop: 40}}>
                <Help>
                    <span className="problem">Problemas com a sua inscrição? Clique aqui e entre em contato com a diretoria do acampamento!</span>
                    <button className="suggest">Deixe sua reclamação, sugestão ou elogio</button>
                </Help>
                
            </Row>
        </Wrapper>
    </>)
}