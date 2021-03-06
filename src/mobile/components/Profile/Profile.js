import React, { useEffect, useRef } from 'react';
import { UserName, Wrapper, Row, Versiculo} from './Profile.style';
import anime from 'animejs';
import { useHistory } from 'react-router-dom';
import Opcao from './Opcao/Opcao';
import Activities from './Activities/Activities';
import { useSelector } from 'react-redux';
import PaymentStatus from '../PaymentStatus/PaymentStatus';
import Button from '../Button/Button';
let animation;

export default function Profile(){
    const title = useRef();
    const history = useHistory();
    const { user } = useSelector(state => state.auth);
    const paymentState = useSelector(state => state.payment);

      useEffect(() => {
        if(animation?.pause) animation.pause();
        animation = anime.timeline({});

        animation.add({
            targets: '.row',
            // translateY: { value: [5, 0], delay: (el, i) => (i) * 50, easing: `easeInOutQuad`},
            // opacity: { value: [0, 1], duration: (el, i) => (i+2) * 500, easing: `easeInOutQuad`}
            // color: [`#353535`,`#a2a2a2`]
        }, )
        
    }, [])
    
    return <>
        <Wrapper>
            <Row>
                <UserName className={"title"}>{user?.username?.split(" ")[0] + ' ' +  (user?.username?.split(" ").length > 1 ? user?.username?.split(" ")[user?.username?.split(" ")?.length - 1] : '') || 'Jovem'}</UserName>
                <div onClick={() => history.push('configuracoes')} style={{fontSize: `0.7em`}}>CONFIGURAÇÕES</div>
            </Row>
            <Row>
            { !user?.inscrito && <>
                { paymentState.isLoading  
                    ? <Button disabled block bg="#666" p={'15px 15px'} color="#fff">Carregando situação da inscrição...</Button> 
                    : 
                    <>{(paymentState.status == 0 || paymentState.status == 7) 
                        && <Button onClick={() => history.push('pagamento')} block bg="#195" p={'15px 15px'} color="#fff">Pague sua inscrição aqui</Button>}                
                      </>
                }
            </>}
            </Row>
            <Row>
                <Versiculo>
                    
                </Versiculo>
            </Row>
            <Row alignItems={'start'}>
               <Opcao name="Novidades" color="#89DD62" href='news'/>
               <Opcao name="Cronograma de atividades" color={"#E16363"}/>
               <Opcao name="Cantina" color={'#56B9BF'}/>
               <Opcao name="Social" color={'#D1BC4A'}/>
            </Row>
            <Row>
                <Activities/>
            </Row>
            {/* <button onClick={() => history.goBack()}>Back</button> */}
        </Wrapper>
    </>
}