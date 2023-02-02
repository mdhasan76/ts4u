import Link from 'next/link';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const [error, setError] = useState("")
    const state = useSelector(s => s);

    const dispatch = useDispatch();
    console.log(state)

    //Login FN
    const handleLogIn = (e) => {
        e.preventDefault();
        setError("")
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        // Login user From Backend
        fetch('https://staging-be-ecom.techserve4u.com/api/user/signin',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.token?.length > 40 ){
                const restToken = data.token.split(" ")[1]
                localStorage.setItem("token", restToken);
                dispatch({type: "token", payload: restToken});
                dispatch({ type: "isLoggedUser", payload: true });
                toast.success("Login Successfull");
            }
            if(data?.message?.length > 5){
                setError(data.message)
            }
        })
    }

    return (
        <section>
            <div>
                <div className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid place-items-center">
                    <div className="hero-content max-w-lg mx-auto  bg-white">
                        <div className="w-full shadow-2xl card-body p-16">
                        <h1 className="text-2xl font-medium text-center pb-10">Login</h1>
                            <form onSubmit={handleLogIn}>
                                <div className="form-control mb-5">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"> Email</span>
                                    </label>
                                    <div>
                                        <input type="email" name="email" placeholder="email" className="p-3 border-b-2 focus:outline-none focus:border-b-4 focus:border-stone-700 font-medium text-lg" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold">Password</span>
                                    </label>
                                    <div>
                                        <input type="password" placeholder="Password" name='password' className="p-3 border-b-2 focus:outline-none focus:border-stone-700 focus:border-b-4 font-medium text-lg" />
                                    </div>
                                    <label className="labelt">
                                        <Link href="/" className="label-text-alt link link-hover block text-right  font-medium text-[16px] pt-2 opacity-80">Forgot password?</Link>
                                    </label>
                                </div>
                                <p className='text-sm text-red-500 py-2'>{error}</p>
                                <div className="form-control mt-3">
                                    <button className="text-white w-full p-4 border-none rounded-full bg-gradient-to-bl from-indigo-500 to-teal-800 text-lg font-semibold">Login</button>
                                </div>
                            </form>

                            <p className='block text-center text-sm label opacity-80 mt-6  '>New to TS4U?
                                <Link  href='/register' className='text-left hover:border-b-2 hover:border-stone-800'> register now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;