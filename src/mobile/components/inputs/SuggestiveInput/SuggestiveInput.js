import React, { useEffect, useRef, useState } from 'react';
import strapi from 'api/strapi';
import {Wrapper, SuggestionsField, Suggestion, MyTextField} from './SuggestiveInput.style';
import { StylesProvider } from '@material-ui/core/styles'
import { InputBase, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

let to;

export default function(props){
    const [igrejas, setIgrejas] = useState([])

    useEffect(() => {
        strapi.get('/igrejas')
        .then(res => setIgrejas(res.data));
    }, [])
    
    function setValue(e){
        props.onChange(e);
    }
     
    return <>
    <StylesProvider injectFirst>
    <Autocomplete
        fullWidth={true}
        freeSolo={true}
        includeInputInList={true}
        disableListWrap={false}
        getOptionLabel={option => typeof option === 'string' ? option : option.nome}
        getOptionSelected={((option, value) => option.nome == value.nome )}
        id="combo-box-demo"
        onChange={(event, nv) => { setValue(typeof nv === 'string' ? {nome: nv} : nv)}}
        options={igrejas}
        renderInput={(params) => <TextField {...params}  label="Igreja"  variant="outlined" />}
        />
    </StylesProvider>
    </>
}