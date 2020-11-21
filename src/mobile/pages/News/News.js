import React, { useEffect } from 'react';
import {useQuery, gql} from '@apollo/client';
import {baseURL} from 'index';
import { Title, ScrollableNews } from './News.style';

//Components
import Noticia from './components/Noticia/Noticia';

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
    const {loading, error, data } = useQuery(GET_NEWS);
    if(loading) return <>
    <Title>Carregando...</Title>
    </>
    return <>
        <Title>Novidades</Title>
        <ScrollableNews>
        {data?.allNews.map( news => {
            return <Noticia data={news}></Noticia>
        })}
        </ScrollableNews>
    </>
}

