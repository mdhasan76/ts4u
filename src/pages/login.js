import Link from 'next/link';
import React from 'react'
const login = () => {

    const handleLogIn = () => {
        console.log('clicked')
    }

    const handleGoogle = () => {
        console.log('clicked')
    }
    return (
        <section>
            <div>
                <div className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid place-items-center">
                    <div className="hero-content max-w-lg mx-auto  bg-white">
                        <div className="w-full shadow-2xl card-body p-16">
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
                                {/* <p className='text-sm text-red-500 py-2'>{error}</p> */}
                                <div className="form-control mt-3">
                                    <button className="text-white w-full p-4 border-none rounded-full bg-gradient-to-bl from-indigo-500 to-teal-800">Login</button>
                                </div>
                            </form>

                            <p className='block text-center text-sm label opacity-80'>New to Repliq?
                                <Link  href='/register' className='label-text-alt link link-hover inline text-left'> register now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default login;