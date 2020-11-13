export default function(message = 'Carregando...'){
    return {type: 'MAIN.SET_LOADING_MESSAGE', message}
}