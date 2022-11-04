import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import image from '../assets/images/login/login.svg';
import { AuthContext } from '../contexts/AuthProvider';

const SignIn = () => {
    const { signIn, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const to = location.state?.from?.pathname || '/';

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
                // console.log(user);

                const currentUser = {
                    email: user.email,
                };

                // get jwt token
                fetch(`https://genius-car-server-beta.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);
                        // local storage is easiest but not best place to store jwt token
                        localStorage.setItem('geniusToken', data.token);
                    });

                navigate(to, { replace: true });
                e.target.reset();
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex flex-col items-center mb-14 lg:flex-row">
            <div className="flex items-center justify-center w-1/2">
                <img className="w-[60%] " src={image} alt="" />
            </div>
            <div className="w-1/2">
                <h1 className="font-bold text-3xl text-center mb-10 text-[#FF3811]">
                    Sign In
                </h1>
                <div className="flex-shrink-0 w-full max-w-sm mx-auto border shadow-lg card bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="font-semibold form-control">
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
                        <div className="font-semibold form-control">
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
                        <div className="mt-6 form-control">
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
