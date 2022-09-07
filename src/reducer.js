export const initialState = {
    authUser : null,
}

const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {

        case "SET_AUTHUSER":
            return{
                ...state,
                authUser: action.authUser,
            };
        
    
        default:
            return state;
    }

}

export default reducer
