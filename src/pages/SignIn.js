import React, { useContext } from 'react';
import image from '../assets/images/login/login.svg';
import { AuthContext } from '../contexts/AuthProvider';

const SignIn = () => {
    const { signIn, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log('Signed In');
                console.log(user);
                e.target.reset();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="mb-14 flex items-center flex-col lg:flex-row">
            <div className="w-1/2 flex items-center justify-center">
                <img className="w-[60%] " src={image} alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="font-bold text-3xl text-center mb-10 text-[#FF3811]">
                    Sign In
                </h1>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-lg border bg-base-100 mx-auto">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control font-semibold">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control font-semibold">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-[#FF3811] hover:bg-[#FF3811] border-0 hover:border-0 capitalize"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
