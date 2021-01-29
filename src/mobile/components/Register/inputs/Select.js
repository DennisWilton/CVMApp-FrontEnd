import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {StyledInput} from './Style'; 
import ReactSelect from 'react-select/async-creatable';
import useStyles from '../useStyles';

export default function Select({name, ...rest}){

    const classes = useStyles();
    const {fieldName, registerField} = useField(name),
          inputRef = useRef();

    useEffect(() => {

        registerField({
            name: fieldName,
            ref:  inputRef.current,
            getValue: ref=> {
                const _return = ref.select.state.value
                                
                return _return;
            }
        })
        
    }, [fieldName, registerField]);

    const customStyles = {
        placeholder: (p, state) => ({
            ...p,
        }),
        control: (p, state) => ({
            ...p,
            background: `#222`,
            border: `none`,
            borderRadius: `2px`,
            padding: `0px 10px`,
            color: `#FFF`
        }),
        indicatorSeparator: (p, state) => ({
            ...p,
            background: `#333`
        }),
        input: (p, state) => ({
            color: `#FFF`,
        }),
        singleValue: (p, state) => ({
            ...p,
            color: `#FFF`
        }),
        valueContainer: (p, state) => ({
            ...p,
            color: `orange`
        }),
        menu: (p, state) => ({
            ...p,background: `#111`
        }),
        option: (p, state) => ({
            background: `#111`,
            color: `#FFF`,
            padding: `10px 20px`,
            fontSize: `0.8em`
        })
    }
    
    return (<>

        <ReactSelect styles={customStyles} ref={inputRef} {...rest}/>
        
    </>)
}