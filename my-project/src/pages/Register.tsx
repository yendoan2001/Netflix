import {PiSignInBold} from "react-icons/pi";

const Register = () => {

    return (
        <div>
            <div className='bg-[rgb(11,15,41)] mx-auto my-[7%] lg:w-[40%] w-[80%] rounded-xl border-gray-600 border '>
                <div className='pb-16 mb-8'>
                    <div className='w-[20%] logo m-10 mx-auto'>
                        <img src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
                    </div>
                    <div className="mb-6 w-[80%] mx-auto">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">FullName</label>
                        <input type="fullname" id="fullname"
                               className="bg-black p-4 border border-gray-300 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="john.doe@company.com" required/>
                    </div>
                    <div className="mb-6 w-[80%] mx-auto">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Email</label>
                        <input type="email" id="email"
                               className="bg-black p-4 border border-gray-300 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="john.doe@company.com" required/>
                    </div>
                    <div className="mb-6 w-[80%] mx-auto">
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Password</label>
                        <input type="password" id="password"
                               className="bg-black border p-4 border-gray-300 text-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="•••••••••" required/>
                    </div>
                    <div className="mb-6 w-[80%] mx-auto">
                        <button type="button"
                                className="hover:transition-all hover:ease-in-out hover:duration-300 focus:outline-none flex items-center justify-center gap-2 w-full px-5 py-4 text-white bg-red-600 hover:bg-gray-900 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <PiSignInBold/>
                            Sign In
                        </button>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='text-gray-500'>
                            Do you have an account?
                        </div>
                        <div className='font-bold text-white'>
                            <a href="">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;