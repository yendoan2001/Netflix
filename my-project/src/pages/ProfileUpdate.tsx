
import {PrivateOptionCard} from "../components/PrivateOptionCard.tsx";


export const ProfileUpdate = () => {
    return (
        <div className='px-6 flex lg:flex-row flex-col lg:gap-12 gap-0'>
            <PrivateOptionCard/>
            <div className='basis-3/4 w-full h-full bg-[rgb(11,15,41)] text-white gap-8 border border-gray-800 rounded-lg p-8 my-8'>
                <div className='text-xl font-bold mb-6'>Profile</div>
                <div className='flex lg:flex-row flex-col justify-between lg:items-center gap-4'>
                    <div className="basis-5/6 flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file"
                               className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-600 border-dashed rounded-lg
                               cursor-pointer bg-[rgb(8,10,26)] dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-8 h-8 mb-4 text-red-600 dark:text-red-600" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p className="mb-2 text-md text-white font-semibold dark:text-gray-400">Drag your image
                                    here</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Only .jpg and .png files will be
                                    accepted </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden"/>
                        </label>
                    </div>
                    <div className='basis-1/6 rounded-lg border-gray-500 p-1 border bg-black hover:cursor-pointer h-max w-max'>
                        <img className='h-[150px] w-[150px] object-cover'
                             src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media"
                             alt=""/>
                    </div>
                </div>
                <div className='mt-5'>
                    <label htmlFor="fullName"
                           className="block mb-2 text-md font-medium text-gray-500 dark:text-white">FullName</label>
                    <input type="fullName"
                           id="fullName"
                           name="fullName"
                           className="bg-[rgb(8,10,26)] p-5 border border-gray-600 text-white text-sm rounded focus:ring-blue-500
                           focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="john.doe@company.com" required/>
                </div>
                <div className='mt-5'>
                    <label htmlFor="email"
                           className="block mb-2 text-md font-medium text-gray-500 dark:text-white">Email</label>
                    <input type="email"
                           id="email"
                           name="email"
                           className="bg-[rgb(8,10,26)] border p-5 border-gray-600 text-white text-sm rounded
                           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700
                           dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                           placeholder="•••••••••" required/>
                </div>
                <div className='my-10 flex lg:flex-row lg:justify-between flex-col-reverse gap-2'>
                    <div className='p-2.5 border bg-red-600 rounded-md border-red-600 font-semibold tracking-wide text-lg text-center
                    hover:bg-[rgb(8,10,26)] hover:cursor-pointer transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300'>Delete Account</div>
                    <div className='p-2.5 border bg-[rgb(8,10,26)] rounded-md border-red-600 font-semibold tracking-wide text-lg text-center hover:bg-red-600
                    hover:cursor-pointer transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300'>Update Profile</div>
                </div>
            </div>
        </div>
    )
}