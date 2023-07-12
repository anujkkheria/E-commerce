import { UserReducer } from "../Types/UserState";
const userReducer:UserReducer = (state,action) =>{
switch(action.type){
    case "Set_User":return{
        ...action.payload
    }
    case "Logout":return{
        ...action.payload
    }
}

}

export default userReducer