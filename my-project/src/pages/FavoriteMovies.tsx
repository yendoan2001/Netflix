import {PrivateOptionCard} from "../components/PrivateOptionCard.tsx";
import {FaEye} from "react-icons/fa";
import {BiSolidCloudDownload} from "react-icons/bi";

export const FavoriteMovies = () => {
    return (
        <div className='px-6 flex lg:flex-row flex-col lg:gap-12 gap-0'>
            <PrivateOptionCard/>
            <div className='basis-3/4 bg-[rgb(11,15,41)] text-white gap-8 border border-gray-800 rounded-lg p-8 my-8'>
                <div className='flex justify-between items-center mb-6'>
                    <div className='text-xl font-bold'>Favorite Movies</div>
                    <div className='text-xl font-semibold px-4 py-2 border rounded border-red-600 text-center hover:bg-red-600 hover:cursor-pointer
                    transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300'>Delete All</div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-900 uppercase bg-[rgb(224,213,213)] dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-2">
                                image
                            </th>
                            <th scope="col" className="px-6 py-2">
                                name
                            </th>
                            <th scope="col" className="px-6 py-2">
                                category
                            </th>
                            <th scope="col" className="px-6 py-2">
                                language
                            </th>
                            <th scope="col" className="px-6 py-2">
                                year
                            </th>
                            <th scope="col" className="px-6 py-2">
                                hours
                            </th>
                            <th scope="col" className="px-6 py-2">
                                actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-[rgb(8,10,26)] border border-gray-600 dark:bg-gray-800 dark:border-gray-700 text-white">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                <div className='rounded-lg border-gray-500 p-1 border bg-black h-max w-max'>
                                    <img className='object-cover h-[50px] w-[50px]'
                                         src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media"
                                         alt=""/>
                                </div>
                            </th>
                            <th scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                The School for Good and Evil
                            </th>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 flex items-center gap-2">
                                <button type="button" className="text-gray-500 border border-gray-600 rounded-md text-sm px-2 py-1.5 inline-flex gap-2 ">Download
                                    <BiSolidCloudDownload className='text-green-500 text-lg'/>
                                </button>
                                <div className='bg-red-600 p-2 rounded-md'>
                                    <FaEye/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-[rgb(8,10,26)] border border-gray-600 dark:bg-gray-800 dark:border-gray-700 text-white">
                            <th scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                <div className='rounded-lg border-gray-500 p-1 border bg-black h-max w-max'>
                                    <img className='object-cover h-[50px] w-[50px]'
                                         src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media"
                                         alt=""/>
                                </div>
                            </th>
                            <th scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                The School for Good and Evil
                            </th>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 flex items-center gap-2">
                                <button type="button" className="text-gray-500 border border-gray-600 rounded-md text-sm px-2 py-1.5 inline-flex gap-2 ">Download
                                    <BiSolidCloudDownload className='text-green-500 text-lg'/>
                                </button>
                                <div className='bg-red-600 p-2 rounded-md'>
                                    <FaEye/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-[rgb(8,10,26)] border border-gray-600 dark:bg-gray-800 text-white">
                            <th scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                <div className='rounded-lg border-gray-500 p-1 border bg-black h-max w-max'>
                                    <img className='object-cover h-[50px] w-[50px]'
                                         src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media"
                                         alt=""/>
                                </div>
                            </th>
                            <th scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                The School for Good and Evil
                            </th>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4 flex items-center gap-2">
                                <button type="button" className="text-gray-500 border border-gray-600 rounded-md text-sm px-2 py-1.5 inline-flex gap-2 ">Download
                                    <BiSolidCloudDownload className='text-green-500 text-lg'/>
                                </button>
                                <div className='bg-red-600 p-2 rounded-md'>
                                    <FaEye/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}