const initState = {
    isLoggedUser: false,
    userToken:"",
    allProduct: [],
    isVerified: false,
}
export const  registerReducer = (state = initState, action) =>{
    switch(action.type){
        case "token":
            return {
                ...state, userToken: action.payload
            }
        case "allData":
            return {
                ...state, allProduct: action.payload
            }
        case "userVerifyed":
            return {
                ...state, isVerified: action.payload
            }
        case "isLoggedUser":
            return {
                ...state, isLoggedUser: action.payload
            }
        default:
            return state
    }
}