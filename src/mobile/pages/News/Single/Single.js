import { baseURL } from 'index';
import React, { useEffect } from 'react';
import { useHistory, Redirect} from 'react-router-dom';
import { Wrapper, Title, Author, Content, Image} from './Single.style';
import ReactMarkdown from 'react-markdown';


export default function Single(props){
    const history = useHistory();
    
    useEffect(() => {
        
    }, [])
   
    
    if(!history.location.state || !history.location.state.data)
    {
        return <Redirect to="/news"/>;
    }
    return <Wrapper>
        <Title>{history.location.state.data.title}</Title>
        <Author>{history.location.state.data?.autor?.username || 'A Diretoria'}</Author>
        <Image href={`${process.env.REACT_APP_STRAPI}${history.location.state.data.cover.formats.large.url}`}></Image>
        <div style={{color: 'white'}}><ReactMarkdown>{history.location.state.data.content}</ReactMarkdown></div>
        
        {/* Ações */}


    </Wrapper>
}