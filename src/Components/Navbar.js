import React from 'react';
import Toggler from '../Utilities/Toggler';

const Navbar = () => {
    return (
        <div>
                <div className="max-w-screen-2xl">
                    <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center dark:bg-black dark:text-white bg-indigo-500 relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
                        <div className="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block  text-sm md:text-base mb-2 sm:mb-0">Dark Mode And Light Mode.</div>

                        <Toggler></Toggler>

                        

                        
                    </div>
                </div>
        </div>
    );
};

export default Navbar;