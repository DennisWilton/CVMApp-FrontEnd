const initialState = {
    user: null,
}

export default function main(state = initialState, action){
    switch(action.type){
        case 'AUTH.LOGGED':
            return {...state, user: action.payload}
        case 'AUTH.LOGOUT':
            return {...state, user: null}
        default:
            return state;
    }
}