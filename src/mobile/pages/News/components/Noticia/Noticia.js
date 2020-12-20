import React, { useEffect, useState } from 'react';
import { Wrapper, Title, Content, Author } from './Noticia.style';
import {baseURL} from 'index';
import { useHistory } from 'react-router-dom';

export default function Noticia({data, ...props}){
    const history = useHistory();

    return <Wrapper onClick={_ => history.push({pathname: `/news/${data._id}`, state: {data}})} picture={`${baseURL}/pictures/news/${data._id}/thumbnail.jpg`}>
        <Title>{data.title}</Title>
        <Content>{data.content.split(" ").slice(0, 10).join(" ")}...</Content>
        <Author>Postado por {data.author.name}</Author>
    </Wrapper>
}