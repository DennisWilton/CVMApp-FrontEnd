/**
 * status | description
 * 
 * -2     | erro
 * -1     | carregando
 * 0      | não efetuado
 * 1      | aguardando pagamento
 * 2      | em análise (cartão crédito)
 * 3      | pago / confirmado
 * 
 */

const initialState = {
    isLoading: true,
}


export default function main(state = initialState, action){
    switch(action.type){
        case 'PMT.SET_STATUS':
            return {...state, ...action.payload}
        case 'PMT.SET_LOADING':
            return {...state, isLoading: action.payload}
        case 'PMT.SET_LAST_DATA':
            return {...state, lastData: action.payload}
        case 'AUTH.LOGOUT':
            return {}
        default:
            return state;
    }
}