import React, { useEffect, useRef, useState } from 'react';
import { Step } from '../../Register.style';
import useStyles from '../../useStyles';
import strapi from 'api/strapi';
import axios from 'axios';

//inputs
import Input from '../../inputs/Input';
import MaskedInput from '../../inputs/MaskedInput';
import Select from '../../inputs/Select';



export default function({showStep, form, setLoading, ...props}){
    // const nomeRef = useRef();

    const first = useRef(true);
    const classes = useStyles();
    const [state, setState] = useState({name: '', inputPastor: false, manualAddress: false})
    const [igrejas, setIgrejas] = useState([]);

    useEffect(() => {
        strapi.get('/igrejas')
        .then( response => {
            const data = response.data.map(i => ({...i, label: `(${i.sigla}) ${i.nome}`}))
            setIgrejas(data)
        })
    }, [])

    useEffect(() => {
    }, [igrejas])

    const MyInputCustomStyle = {
        // marginBottom: 10
    }
    
  

    const handleChange = e => {
        e.persist();
        setState(state => ({...state, name: e.target.value}))
    }

    const confirmPassword = e => {
        if(!form.current) return;
        const password = form.current.getFieldValue("user.password");
        const passwordConfirm = form.current.getFieldValue("user.passwordConfirm");
        const passwordConfirmRef = form.current.getFieldRef('user.passwordConfirm');
                
        if(first.current == true){ first.current = false; return}

        setState({...state, isPasswordError: (passwordConfirm !== password) })

        if((passwordConfirm !== password)) passwordConfirmRef.value = ""
    }

    const titleStyle = {
        color: `#FFF`,
    }

    const handleIgreja = e => {
        setState(state => ({...state, inputPastor: !!e.__isNew__}))
    }

    const handleCep = e => {
        e.persist();
        const cep = e.target.value.replace(/\D/g, "");
        if(!cep.trim()) return;
        axios.get(`//viacep.com.br/ws/${cep}/json/`)
        .then( response => {
            if(response.data.erro) { setState(state => ({...state, manualAddress: true})); return}
            setState(state => ({...state, manualAddress: false}))
            form.current.setFieldValue("user.address.rua", response.data.logradouro)
            form.current.setFieldValue("user.address.bairro", response.data.bairro)
            form.current.setFieldValue("user.address.cidade", response.data.localidade)
            form.current.setFieldValue("user.address.UF", response.data.uf)
        })
        .catch(err => {
            e.target.value = ""
        })
    }
    

    return <Step showStep>
        <h1 style={{marginTop: 50}} className={classes.title}>Olá, {state.name.split(" ")[0] || 'Jovem'}!</h1>
        <p className={classes.subtitle}>Sua jornada começa aqui! Preencha o form.currentulário abaixo para realizarmos seu cadastro em nosso app!</p>
        <Input 
            required
            name="user.username"
            autoComplete="off"
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            onChange={handleChange} 
            placeholder="Nome completo" />
        
        <MaskedInput 
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            placeholder={`CPF`} 
            inputMode="numeric"
            mask="999.999.999-99" 
            name="user.cpf"/>
           
        <Input 
            required
            name="user.password"
            type="password"
            autoComplete="off"
            onBlur={confirmPassword}
            className={`${classes.defaultInput} ${classes.fullwidth}`}
            placeholder="Senha" />

          
        <Input 
            required
            name="user.passwordConfirm"
            type="password"
            autoComplete="off"
            onBlur={confirmPassword}
            className={`${classes.defaultInput} ${classes.fullwidth} ${state.isPasswordError ? 'invalid' : ''}`}
            placeholder="Confirme sua senha" />

        <MaskedInput 
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            placeholder={`Data de nascimento`} 
            inputMode="numeric"
            mask="99/99/9999" 
            name="user.nascimento"/>
        
        <Input 
            name="user.email"
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            type="email"
            placeholder={`Seu e-mail (ex: ${state.name.split(" ").filter(w => (w.trim() !== "" && w.trim().length >= 3)).slice(0,2).join(".").toLowerCase() || 'jovem'}@exemplo.com)`} />

        <MaskedInput 
                    required
                    className={[classes.defaultInput, classes.fullwidth].join(" ")}
                    placeholder={`Celular`} 
                    inputMode="numeric"
                    mask="(99) 9 9999-9999" 
                    name="user.phone"/>
        
        <h3 style={{marginTop: 20}} className={classes.subtitle}>De qual igreja você vem, {state.name.split(" ")[0] || 'jovem'}?</h3>
        
        <Select 
            name='igreja.nome' 
            defaultOptions={igrejas} 
            placeholder={"Selecione a sua igreja"}
            onChange={handleIgreja}/>
        
        {state.inputPastor && <Input required
                                     className={[classes.defaultInput, classes.fullwidth].join(" ")}
                                     name="igreja.pastor"
                                     placeholder="Pastor responsável"
                                     />}
        
        {state.inputPastor && <Input 
                                     className={[classes.defaultInput, classes.fullwidth].join(" ")}
                                     name="igreja.sigla"
                                     placeholder="Sigla (opcional)"
                                     />}

        <h3 style={{marginTop: 20}} className={classes.subtitle}>Endereço</h3>

        <MaskedInput 
                    required
                    autoComplete="off"
                    className={[classes.defaultInput, classes.fullwidth].join(" ")}
                    onChange={handleCep}
                    placeholder={`CEP`} 
                    inputMode="numeric"
                    mask="99999-999" 
                    name="user.address.cep"/>

        <Input 
            name="user.address.numero"
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            type="text"
            inputMode="numeric"
            placeholder={`Número`} />

        <Input 
            name="user.address.rua"
            disabled={!state.manualAddress}
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            type="text"
            placeholder={`Rua`} />

        <Input 
            name="user.address.bairro"
            disabled={!state.manualAddress}
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            type="text"
            placeholder={`Bairro`} />

        <Input 
            name="user.address.cidade"
            disabled={!state.manualAddress}
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            type="text"
            placeholder={`Cidade`} />

        <Input 
            name="user.address.UF"
            disabled={!state.manualAddress}
            required
            className={[classes.defaultInput, classes.fullwidth].join(" ")}
            type="text"
            placeholder={`UF`} />

    </Step>
}