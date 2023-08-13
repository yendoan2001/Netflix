import {PrivateOptionCard} from "../components/PrivateOptionCard.tsx";

export const ChangePassword = () => {
    return (
        <div className='px-6 flex lg:flex-row flex-col lg:gap-12 gap-0'>
            <PrivateOptionCard/>
            <div className='basis-3/4 w-full h-full bg-[rgb(11,15,41)] text-white gap-8 border border-gray-800 rounded-lg p-8 my-8'>
                <div className='text-xl font-bold mb-6'>Change Password</div>
                <div>
                    <div className='mt-5'>
                        <label htmlFor="oldPassword"
                               className="block mb-2 text-md font-medium text-gray-500 dark:text-white">Previous
                            Password</label>
                        <input type="oldPassword"
                               id="oldPassword"
                               name="oldPassword"
                               className="bg-[rgb(8,10,26)] p-5 border border-gray-600 text-white text-sm rounded focus:ring-blue-500
                           focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="•••••••••" required/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="newPassword"
                               className="block mb-2 text-md font-medium text-gray-500 dark:text-white">New
                            Password</label>
                        <input type="newPassword"
                               id="newPassword"
                               name="newPassword"
                               className="bg-[rgb(8,10,26)] border p-5 border-gray-600 text-white text-sm rounded
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                               placeholder="•••••••••" required/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="newPassword"
                               className="block mb-2 text-md font-medium text-gray-500 dark:text-white">Confirm
                            Password</label>
                        <input type="newPassword"
                               id="newPassword"
                               name="newPassword"
                               className="bg-[rgb(8,10,26)] border p-5 border-gray-600 text-white text-sm rounded
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                               placeholder="•••••••••" required/>
                    </div>
                </div>
                <div className='my-10 flex lg:flex-row lg:justify-end flex-col gap-2'>
                    <div className='p-2.5 border bg-[rgb(8,10,26)] rounded-md border-red-600 font-semibold tracking-wide text-lg text-center hover:bg-red-600
                    hover:cursor-pointer transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300'>Change
                        Password
                    </div>
                </div>

            </div>
        </div>
    )
}