import {FiUser} from "react-icons/fi";
import {BsFillHeartFill} from "react-icons/bs";
import {Outlet} from "react-router-dom";

export const LayOut = () => {
    return (
        <div className='bg-[#080a1a]'>
            <div className='bg-[rgb(8,10,26)] max-w-screen-2xl container mx-auto'>
                <div className='bg-[#080a1a] h-[100px] text-white px-6 mx-auto flex items-center nav_bar'>
                    <div className='lg:block hidden lg:basis-1/6 logo'>
                        <img className='w-[60%]' src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
                    </div>
                    <div className='lg:basis-3/6 w-full search_input'>
                        <div>
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div
                                    className="absolute rounded bg-red-600 w-[50px] inset-y-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 ml-1 text-white dark:text-gray-400"
                                         aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block lg:w-[80%] w-full bg-[rgb(224,213,213)] p-3.5 pl-10 text-sm placeholder:p-6 placeholder:text-gray-700 placeholder:font-medium border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                                       placeholder="Search Movie Name From Here" required/>
                            </div>
                        </div>
                    </div>
                    <div className='basis-2/6 hidden lg:flex justify-between gap-6 text-sm font-medium options'>
                        <a href="">Movies</a>
                        <a href="">About Us</a>
                        <a href="">Contact Us</a>
                        <a href=""><FiUser className='w-6 h-6'/></a>
                        <a className='relative' href=""><BsFillHeartFill className='w-6 h-6'/>
                            <div
                                className='absolute bg-red-600 w-5 h-5 rounded-3xl bottom-7 flex items-center justify-center'>0
                            </div>
                        </a>
                    </div>
                </div>
                <div className='main min-h-max'>
                    <Outlet/>
                </div>
            </div>
            <div className='bg-[rgb(11,15,41)] min-h-max mx-auto footer'>
                <div className='grid lg:grid-cols-4 grid-cols-2 w-[80%] h-full py-12 mx-auto items-center gap-4'>
                    <div>
                        <div className='text-white mb-4 font-semibold tracking-wider text-lg'>Company</div>
                        <div className='text-gray-500 py-1'>Home</div>
                        <div className='text-gray-500 py-1'>About Us</div>
                        <div className='text-gray-500 py-1'>Contact Us</div>
                        <div className='text-gray-500 py-1'>Movies</div>
                    </div>
                    <div>
                        <div className='text-white mb-4 font-semibold tracking-wider text-lg'>Top Categories</div>
                        <div className='text-gray-500 py-1'>Action</div>
                        <div className='text-gray-500 py-1'>Romantic</div>
                        <div className='text-gray-500 py-1'>Drama</div>
                        <div className='text-gray-500 py-1'>Historical</div>
                    </div>
                    <div>
                        <div className='text-white mb-4 font-semibold tracking-wider text-lg'>My Account</div>
                        <div className='text-gray-500 py-1'>Dashboard</div>
                        <div className='text-gray-500 py-1'>My Favorites</div>
                        <div className='text-gray-500 py-1'>Profile</div>
                        <div className='text-gray-500 py-1'>Change Password</div>
                    </div>
                    <div>
                        <div className='w-[130px] logo'>
                            <img src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
                        </div>
                        <div className='text-gray-500 py-1'>Lorem 196 Andrew Road, Suite 200,</div>
                        <div className='text-gray-500 py-1'>New York, NY 10007</div>
                        <div className='text-gray-500 py-1'>Tell: +255 754 661 423</div>
                        <div className='text-gray-500 py-1'>Email: info@zpunet.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}