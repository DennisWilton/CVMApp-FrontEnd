import Axios from 'axios';

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_HOST}/user/`,
    headers: { Authorization: 'Bearer ' + localStorage.getItem('__authtoken') },
})

export const getUserPaymentStatus = async function(user){
    try {
        const data = await(await axios.get(`${user._id}/paymentStatus`)).data.status

        return data;
    }catch(e){
        console.log(e.message)
    }
}