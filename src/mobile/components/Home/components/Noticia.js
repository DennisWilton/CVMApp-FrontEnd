import React from 'react';
import {Wrapper} from './Noticia.style';
import { Button } from '../Home.style';

export default function Noticia(){
    return <>
    <Wrapper image={"https://www.ufc.com.br/themes/custom/ufc/assets/img/default-hero.jpg"}/>
    <Button style={{marginBottom: 15, marginTop: -25}}>Ver mais...</Button>
    </>
}