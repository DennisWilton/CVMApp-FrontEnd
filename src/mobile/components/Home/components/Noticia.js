import React, { useEffect, useState } from 'react';
import {Wrapper} from './Noticia.style';
import { Button } from '../Home.style';
import { useHistory } from 'react-router-dom';
import strapi from 'api/strapi';

export default function Noticia(){
    const history = useHistory();
    const [noticia, setNoticia] = useState({
        title: 'Carregando...'
    })

    useEffect(() => {
        strapi.get('/novidades')
        .then( ({data}) => {
            setNoticia(data[0])
        })
        .catch( err => {
            console.error("Falha ao buscar novidades...")
        } )
    }, [])
    
    return <>
    <Wrapper image={noticia?.cover?.url ? `${process.env.REACT_APP_STRAPI}${noticia.cover.formats.small.url}` : ""}>
        <span className="title">{noticia?.title}</span>
        <span className="description">{noticia?.description}</span>
    </Wrapper>
    <Button onClick={() => history.push('/news')} style={{marginBottom: 15, marginTop: -25}}>Ver mais...</Button>
    </>
}