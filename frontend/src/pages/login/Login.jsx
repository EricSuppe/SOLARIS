import React from 'react'

// import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

import { useRef, useContext } from 'react'
import { loginCall } from '../../services/apiCalls'
import { AuthContext } from "../../context/AuthContext"
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
    // 👇️ email und password from current user
    const email = useRef();
    const password = useRef();

    // 👇️ true when darkmode is activated

    // 👇️ current user
    // eslint-disable-next-line no-unused-vars
    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    // 👇️ login
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    }

    return (
        <>
            {/* <Navbar currentPage={"Login"}/> */}
            <main className="relative w-screen h-screen overflow-x-hidden overflow-y-auto bg-black perspective background-pattern">
                <section className='realtive w-full h-full flex items-center justify-center'>
                    <form onSubmit={handleClick} className="flex flex-col">
                        <input 
                            type="email" 
                            placeholder='Email' 
                            required 
                            className='text-black bg-[#ff5c00]' 
                            ref={email}/>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            required 
                            minLength="6"
                            className='text-black bg-[#ff5c00]' 
                            ref={password}/>
                        <button className='bg-white text-black' disabled={isFetching}>{isFetching ? <CircularProgress></CircularProgress> : "Log In"}</button>
                    </form>
                </section>
            <Footer/>
            </main>
        </>
    )
}
