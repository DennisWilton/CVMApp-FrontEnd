import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export default function ProtectedRoute({children, to = "/", ...props}){
    const auth = useSelector(state => state.auth);
    
    if(auth.user){
        return children;
    } else {
        return <Redirect to={to}/>
    }
};