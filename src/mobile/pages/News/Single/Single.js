import { baseURL } from 'index';
import React, { useEffect } from 'react';
import { useHistory, Redirect} from 'react-router-dom';
import { Wrapper, Title, Author, Content, Image} from './Single.style';


export default function Single(props){
    const history = useHistory();
    
    useEffect(() => {
        
    }, [])

   
    
    if(!history.location.state || !history.location.state.data)
    {
        return <Redirect to="/news"/>;
    }
    const {data} = history.location.state;
    return <Wrapper>
        <Title>{history.location.state.data.title}</Title>
        <Author>{history.location.state.data.author.name}</Author>
        <Image href={`${baseURL}/pictures/news/${data._id}/thumbnail.jpg`}></Image>
        <Content>{history.location.state.data.content}</Content>
        
        {/* Ações */}


    </Wrapper>
}