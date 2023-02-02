const initState = {
    user:{email: "", password:"", name:""},
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
        case "userLogin":
            return {
                ...state, user: {email: action.payload[0], password: action.payload[1]}
            }
        default:
            return state
    }
}