import React, { useEffect, useState } from 'react';
import { Wrapper, Title, Content, Author } from './Noticia.style';
import {baseURL} from 'index';

export default function Noticia({data, ...props}){
    const [random, setRandom] = useState();
    useEffect(() => {
        setRandom(Math.round(Math.random()*(data.picture.length - 1)))
    }, [])
    return <Wrapper picture={`${baseURL}/pictures/news/${data._id}/thumbnail.jpg`}>
        <Title>{data.title}</Title>
        <Content>{data.content}</Content>
        <Author>Postado por {data.author.name}</Author>
    </Wrapper>
}