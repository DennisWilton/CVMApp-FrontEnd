import React, { useEffect, useRef } from 'react';
import { UserName, Wrapper, Row, Versiculo} from './Profile.style';
import anime from 'animejs';
import { useHistory } from 'react-router-dom';
import Opcao from './Opcao/Opcao';
import Activities from './Activities/Activities';
import { useSelector } from 'react-redux';
let animation;

export default function Profile(){
    const title = useRef();
    const history = useHistory();
    const { user } = useSelector(state => state.auth);

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
                <UserName className={"title"}>{user?.name?.split(" ")[0] + ' ' +  (user?.name?.split(" ").length > 1 ? user?.name?.split(" ")[user?.name?.split(" ")?.length - 1] : '') || 'Jovem'}</UserName>
                <div style={{fontSize: `0.7em`}}>CONFIGURAÇÕES</div>
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