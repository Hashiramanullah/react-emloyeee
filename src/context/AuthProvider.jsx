import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
export const  AuthContext = createContext();

const AuthProvider = ({children}) => {
   const [userData, setUserData] = useState(null);
   useEffect(() => {
    // setLocalStorage()
   const {employees,admin} = getLocalStorage();
   
    setUserData(employees,admin);
    // console.log(userData);
    
   }, [])
   
 const data =  getLocalStorage();
//  console.log(data);
 
//  console.log(data);
 
  return (
     <AuthContext.Provider value={data}>
   {children}
 </AuthContext.Provider>
   
  )
}


export default AuthProvider