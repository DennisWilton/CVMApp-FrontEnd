import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {StyledInput} from './Style'; 
import useStyles from '../useStyles';

export default function Input({name, ...rest}){

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

        <input className={classes.defaultInput} ref={inputRef} {...rest}/>
        
    </>)
}