import React from 'react';
import { Link } from 'react-router-dom';

export function Header () {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white flex flex-grow items-center border-b-2 border-gray-100 justify-center">
            <div className="p-3 hover:text-gray-900">
                <Link to='/home'>
                    <span>Home</span>
                </Link>
            </div>
            <div className="p-3">
                <Link to='/blog'>
                    <span>Blog</span>
                </Link>
            </div>
            <div className="p-3">
                <Link to='/about'>
                    <span>About</span>
                </Link>
            </div>
            
        </div>
    );
}