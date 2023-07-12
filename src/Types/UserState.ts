export interface User {
    id:string;
    name: string;
    email:string;
    address: string;
  }

  export type UserActions={type:"Set_User", payload:User}|{type:"Logout",payload:User}
  export interface UserReducer{
    (state:User,reducer:UserActions):User
  }