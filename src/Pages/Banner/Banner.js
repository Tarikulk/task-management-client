import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero bg-sky-500 mx-10 mt-10 rounded-lg p-10">
                <div className="hero-content flex flex-col lg:flex-row-reverse">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-10'>
                        <h1 className="text-5xl font-bold">Create Your Task</h1>
                        <p className="py-6 font-semibold">Boost productivity with Hal's Task Management! Streamline collaboration, customize workflows, and track projects effortlessly. Sign up for efficient task delegation, progress tracking, and deadline management.</p>
                        <Link to="/signIn">
                        <button className="btn bg-white p-3 rounded">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;