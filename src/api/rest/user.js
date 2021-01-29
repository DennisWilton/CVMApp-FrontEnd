import Axios from 'axios';
import strapi from 'api/strapi';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_HOST}/user/`,
    headers: { Authorization: 'Bearer ' + localStorage.getItem('__authtoken') },
})

export const getUserPaymentStatus = async function(user){
    try {
        const {status, data} = await strapi.secure.get('/pagamentos');

        return data.pagamentos[0];
    }catch(e){
        console.log(e.message)
    }
}