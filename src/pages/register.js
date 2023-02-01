import Link from "next/link";

const register = () => {
    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {
            name, email, password
        }
        fetch('https://staging-be-ecom.techserve4u.com/api/user/signup',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.isOtpSend){
                console.log("Registe success")
            }
            console.log(data)
        })
    }
    return (
        <section>
            <div>
                <div className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 grid place-items-center">
                    <div className="hero-content max-w-lg mx-auto  bg-white">
                        <div className="w-full shadow-2xl card-body p-16">
                            <h1 className="text-2xl font-medium text-center pb-10">Register Account</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control mb-5">
                                    <label className="label pb-0">
                                        <span className="label-text text-lg font-semibold"> Full Name</span>
                                    </label>
                                    <div>
                                        <input type="text" name="name" placeholder="Md Hasan" className="p-3 border-b-2 focus:outline-none focus:border-b-4 focus:border-stone-700 font-medium text-lg" />
                                    </div>
                                </div>
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
                                </div>
                                {/* <p className='text-sm text-red-500 py-2'>{error}</p> */}
                                <div className="form-control mt-3">
                                    <button className="text-white w-full p-3 border-none rounded-full bg-gradient-to-bl from-indigo-500 to-teal-800 text-lg">Submit</button>
                                </div>
                            </form>

                            <p className='block text-center text-sm label opacity-80 mt-6  '>Already have account?
                                <Link  href='/register' className='text-left hover:border-b-2 hover:border-stone-800'> Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default register;