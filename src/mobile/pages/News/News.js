import React, { useEffect, useState } from 'react';
import {useQuery, gql} from '@apollo/client';
import { Title, ScrollableNews, CloseButton } from './News.style';
import strapi from 'api/strapi';

//Components
import Noticia from './components/Noticia/Noticia';
import { useHistory } from 'react-router-dom';

export default function News(props){
    const history = useHistory();

    const [state, setState] = useState({isLoading: true, news: []})

    useEffect(() => {
      strapi.get('/novidades')
      .then( response => {
          setState(state => ({...state, isLoading: false, news: response.data}))
      })
      .catch( err => {
        history.push('/profile')
      })
    }, [])  

    if(state.isLoading) return <>
    <Title>Carregando...</Title>
    </>
    return <>
        <CloseButton onClick={_ => history.replace('/profile')} >&times;</CloseButton>
        <Title>Novidades</Title>
        <ScrollableNews>
        {state?.news?.map( news => {
            return <Noticia data={news}></Noticia>
        })}
        </ScrollableNews>
    </>
}

