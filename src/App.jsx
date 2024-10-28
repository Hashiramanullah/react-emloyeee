import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useTheme } from './context/ThemeContext'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

 const App = () => {
    const {theme , toggelTheme} = useTheme();
    const [user,setUser] = useState(null);
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    const authData = useContext(AuthContext);
    // authData.EmployeeData
    // console.log(authData.EmployeeData);
    // set data into local Storage
    
// localStorage.clear()
     useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser');
   if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
    // console.log(userData);
    setUser(userData.role)
    setLoggedInUserData(userData.data)
    //  console.log(loggedInUser,'user loggedIn');

   }
  
     },[])
// localStorage.clear()     
     const handleLogin = (email,password) => {
             
       if(email == 'admin@gmail.com' && password == '123'){
        // console.log(`helo ${email}`);
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
        setUser('admin')
         
       }else if(authData){
          const employee = authData.EmployeeData.find((e)=>email == e.email && password == e.password)
          if(employee){
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
            setLoggedInUserData(employee);
            setUser('employee');

          }
        
       }else{
        alert('invalid credantial');
       }
     }
     
    
     

  return (
    <>
   <div className={` ${theme == 'light' ? 'bg-slate-200 text-black' :'body'} `}>
   
 {!user   ? <Login  handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : <EmployeeDashboard changeUser={setUser} user={user} employeeData={loggedInUserData}/>}

   </div>
   
    </>
  )
}

export default App

// import React from 'react';
// import { ThemeProvider, useTheme } from './context/ThemeContext';
// import Navbar from './components/Navbar';
// import Home from './components/Home';

// function ThemedApp() {
//   const { theme } = useTheme();

//   return (
//     <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen`}>
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemedApp />
//     </ThemeProvider>
//   );
// }

// export default App;
