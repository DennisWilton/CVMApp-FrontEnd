import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, App, AppContent, Loading } from './App.style';
import assets from 'util/assets';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import anime from 'animejs';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from 'util/ProtectedRoute';

//pages
import Home from './Home/Home';
import News from 'mobile/pages/News/News';

let timeline;

export default function APP(){
    const dispatch          = useDispatch();
    const appContent        = useRef();
    const brand             = useRef();
    const wrapper           = useRef();
    const location          = useLocation();
    const history           = useHistory();
    const mainState         = useSelector(state => state.main);
    const [state, setState] = useState({});

    useEffect(() => {
        setState( (state) => ({...state, minHeight: window.innerHeight <= 937 ? window.innerHeight : 937}) );
        dispatch({type: 'MAIN.APP.START'});
    }, [])
   
    useEffect(() => {
        timeline = anime.timeline({});
        timeline.pause();
        timeline = anime.timeline({easing: `easeInOutCirc`});
        timeline.add({
            targets: wrapper.current,
            gridTemplateRows: [`75% 80%`, `20% 80%`],
        });
        timeline.add({
            targets: appContent.current,
            width: [`calc(100% - 40px)`, `calc(100% - 40px)`],
            height: [`calc(100% - 40px)`, `calc(100% - 40px)`],
            margin: 20,
            borderRadius: 14,
        }, 0);
    }, [])
    
    useEffect(() => {
        if(timeline?.pause) timeline.pause();
        timeline = anime.timeline({});

        let ease = `spring(1, 100, 20, 10)`;

        switch(location.pathname){
            case '/':
                timeline.pause();
                timeline = anime.timeline({easing: `${ease}`});
                timeline.add({
                    targets: wrapper.current,
                    gridTemplateRows: `20% 80%`
                });
                timeline.add({
                    targets: appContent.current,
                    width: `calc(100% - 40px)`,
                    height: `calc(100% - 40px)`,
                    margin: 20,
                    borderRadius: 14,
                }, 0);
                break;
            default:
                timeline.pause();
                timeline = anime.timeline({easing: `${ease}`});
                timeline.add({
                    targets: wrapper.current,
                    gridTemplateRows: `0% 100%`
                });
                timeline.add({
                    targets: appContent.current,
                    width: `calc(100% - 0px)`,
                    height: `calc(100% - 0px)`,
                    margin: 0,
                    borderRadius: 0,
                }, 0 );
                break;
        }
    }, [location])

    useEffect(() => {
        document.title = mainState.title;
    }, [mainState.title])
   
    
    return <>
        <App>
            <Wrapper ref={wrapper} minHeight={state.minHeight}>
                <div ref={brand} id="brand">
                   <img src={`${assets('images/logo.jpg')}`}/>
                </div>
                <AppContent ref={appContent}>
                    {mainState.isLoading && <Loading>
                        {mainState.loadingMessage || 'Carregando... Por favor, aguarde.'}
                    </Loading>}
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <ProtectedRoute path="/profile">
                            <Profile/>
                        </ProtectedRoute>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/news">
                            <News/>
                        </Route>
                        <Route path="/">Página não encontrada. <div onClick={() => history.goBack()}>Clique aqui para voltar à página inicial.</div></Route>
                    </Switch>
                </AppContent>
            </Wrapper>
        </App>
    </>
}