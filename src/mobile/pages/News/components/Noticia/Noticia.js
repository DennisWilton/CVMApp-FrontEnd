import React, { useEffect, useState } from 'react';
import { Wrapper, Title, Content, Author } from './Noticia.style';
import {baseURL} from 'index';
import { useHistory } from 'react-router-dom';

export default function Noticia({data, ...props}){
    const history = useHistory();

    return <Wrapper onClick={_ => history.push({pathname: `/news/${data.slug}`, state: {data}})} picture={`${process.env.REACT_APP_STRAPI}${data.cover.formats.large.url}`}>
        <Title>{data.title}</Title>
        <Content>{data.description}</Content>
        <Author>Postado por {data?.autor?.username || 'alguém da diretoria.'}</Author>
    </Wrapper>
}