import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {StyledInput} from './Style'; 
import ReactMaskedInput from 'react-input-mask';
import useStyles from '../useStyles';

export default function MaskedInput({name, mask, onChange, ...rest}){

    const classes = useStyles();
    const {fieldName, registerField} = useField(name),
          inputRef = useRef();

    useEffect(() => {

        registerField({
            name: fieldName,
            ref:  inputRef.current,
            path: 'value'
        })
        
    }, [fieldName, registerField]);
    
    return (<>

        <ReactMaskedInput mask={mask} onBlur={onChange}>
            {() => <input className={classes.defaultInput} ref={inputRef} {...rest}/>}
        </ReactMaskedInput>
        
    </>)
}