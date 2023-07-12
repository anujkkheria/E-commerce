import {createContext,useContext,useReducer} from 'react'
import { ContextProps } from '../Types/Icontext'
import reducer from '../Reducers/UserReducer'
import { User,UserReducer } from '../Types/UserState'

const initialUser:User = { 
  id:"",
  name:"",
  email:"",
  address:"",
}
const UserContext = createContext<User>(initialUser);

const UserProvider:React.FC<{children:any}> = (props) => {
  const {children} = props
  const[state,dispatch] = useReducer<UserReducer>(reducer,initialUser)
  const getUserdetails = () =>{
    dispatch({type:"Set_User",payload:initialUser})
  }
  const Logout = () => {
    dispatch({type:"Logout",payload:{
      id:"",
      name:"",
      email:"",
      address:"",
    }})
  }
  return < UserContext.Provider value={{...initialUser}}>
  {children}
  </UserContext.Provider>
}

export default UserProvider