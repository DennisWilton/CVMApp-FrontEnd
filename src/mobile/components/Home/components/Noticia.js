import React from 'react';
import {Wrapper} from './Noticia.style';
import { Button } from '../Home.style';
import { useHistory } from 'react-router-dom';

export default function Noticia(){
    const history = useHistory();
    return <>
    <Wrapper image={"https://www.ufc.com.br/themes/custom/ufc/assets/img/default-hero.jpg"}/>
    <Button onClick={() => history.push('/news')} style={{marginBottom: 15, marginTop: -25}}>Ver mais...</Button>
    </>
}