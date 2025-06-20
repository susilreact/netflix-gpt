import React, { useState } from 'react';
import Header from './Header';

export const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const tohhleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg'
                    alt='Banner logo'
                />
            </div>
            <form className='w-3/12 p-12 my-36 absolute bg-black mx-auto right-0 left-0 text-white rounded opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </h1>
                {!isSignInForm && (
                    <input
                        type='text'
                        placeholder='Name'
                        className='p-4 my-4 w-full bg-gray-900 rounded'
                    />
                )}
                <input
                    type='text'
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-900 rounded'
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-900 rounded'
                />
                <button className='p-2 my-4 bg-red-500 w-full rounded-lg'>
                    {isSignInForm ? 'Sign In' : 'Sign Up'}
                </button>
                <p className=' py-4 cursor-pointer' onClick={tohhleSignInForm}>
                    {isSignInForm
                        ? 'New to NeTFlix ?Sign Up Now'
                        : 'Already Register ?Sign In Now '}
                </p>
            </form>
        </div>
    );
};
