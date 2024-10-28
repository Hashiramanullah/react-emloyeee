import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // formSubmit functionality;

    // twoway binding
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = (e) => {
        handleLogin(email,password)
       e.preventDefault();
 
   

    setEmail('');
    setPassword('')


    
   }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2   p-20 border-emerald-700 rounded-md '>
                <form 
                onSubmit={(e)=>{
                    SubmitHandler(e);
                }}
                 className='flex flex-col items-center justify-center'>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    required
                    className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5' type="email" placeholder='Enter Your Email' />
                    <input
                    value={password}
                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                    type="password" className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 mt-4' placeholder='Enter Your Password' />
                    <button className='outline-none bg-emerald-600 placeholder:text-white border-2 border-none rounded-full py-3 px-16  mt-7 hover:bg-emerald-100 hover:text-black'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login