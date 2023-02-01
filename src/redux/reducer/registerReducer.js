const initState = {
    name: "Hasan",
    userToken:""
}
export const  registerReducer = (state = initState, action) =>{
    switch(action.type){
        case "token":
            return {
                ...state, userToken: action.payload
            }
        default:
            return state
    }
}