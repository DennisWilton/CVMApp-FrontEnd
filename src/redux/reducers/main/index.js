const initialState = {
    title: 'CVM',
    isLoading: false
}

export default function main(state = initialState, action){
    switch(action.type){
        case 'SET_TITLE':
            return {...state, title: action.title}
        case 'MAIN.SET_LOADING.ON':
            return {...state, isLoading: true}
        case 'MAIN.SET_LOADING.OFF':
            return {...state, isLoading: false, loadingMessage: 'Carregando...'}
        case 'MAIN.SET_LOADING_MESSAGE':
                return {...state, loadingMessage: action.message}
        default:
            return state;
    }
}