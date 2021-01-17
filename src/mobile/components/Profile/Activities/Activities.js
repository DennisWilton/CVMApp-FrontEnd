import React from 'react';
import { Wrapper } from './Activities.style';

export default function Activities(props){
    return <>
        <Wrapper>
            {process.env.REACT_APP_HOST}
        </Wrapper>
    </>
}