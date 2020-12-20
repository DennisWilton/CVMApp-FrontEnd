import React, { useEffect } from 'react';
import {useQuery, gql} from '@apollo/client';
import {baseURL} from 'index';
import { Title, ScrollableNews, CloseButton } from './News.style';

//Components
import Noticia from './components/Noticia/Noticia';
import { useHistory } from 'react-router-dom';

const GET_NEWS = gql`
  query GetNews{
    allNews{
      _id
      title
      author {
          name
      }
      picture
      content
    }
  }
`;

export default function News(props){
    const history = useHistory();

    
    const {loading, error, data } = useQuery(GET_NEWS);
    if(loading) return <>
    <Title>Carregando...</Title>
    </>
    return <>
        <CloseButton onClick={_ => history.replace('/profile')} >&times;</CloseButton>
        <Title>Novidades</Title>
        <ScrollableNews>
        {data?.allNews.map( news => {
            return <Noticia data={news}></Noticia>
        })}
        </ScrollableNews>
    </>
}

