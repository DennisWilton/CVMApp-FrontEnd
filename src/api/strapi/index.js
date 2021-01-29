import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.REACT_APP_STRAPI
})

axios.secure = Axios.create({
    baseURL: process.env.REACT_APP_STRAPI,
    headers: { Authorization: 'Bearer ' + localStorage.getItem('__authtoken')}
})

axios.updateSecure = function(){
    console.log("Updating secure API...");

    axios.secure =  Axios.create({
        baseURL: process.env.REACT_APP_STRAPI,
        headers: { Authorization: 'Bearer ' + localStorage.getItem('__authtoken')}
    })

}

export default axios;