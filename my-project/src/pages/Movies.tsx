import {ImageCard} from "../components/ImageCard";
import {TbPlayerTrackNext, TbPlayerTrackPrev} from "react-icons/tb";


const Movies = () => {
    return (
        <div className='px-6'>
            <div className='bg-[rgb(11,15,41)] rounded-lg border-gray-800 border my-4 mx-auto h-max p-6 selector'>
                <div className='text-white w-full xl:gap-12 md:gap-6 gap-2 grid md:grid-cols-5 grid-cols-2 justify-center items-center'>
                    <div>
                        <select id="countries" className="bg-[rgb(8,10,26)] border border-gray-800 text-gray-200 text-sm rounded-lg focus:ring-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>All Categories</option>
                            <option className='' value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <select id="countries" className="bg-[rgb(8,10,26)] border border-gray-800 text-gray-200 text-sm rounded-lg focus:ring-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Sorted By Language</option>
                            <option className='' value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <select id="countries" className="bg-[rgb(8,10,26)] border border-gray-800 text-gray-200 text-sm rounded-lg focus:ring-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Sorted By Year</option>
                            <option className='' value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <select id="countries" className="bg-[rgb(8,10,26)] border border-gray-800 text-gray-200 text-sm rounded-lg focus:ring-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Sorted By Hours</option>
                            <option className='' value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <select id="countries" className="bg-[rgb(8,10,26)] border border-gray-800 text-gray-200 text-sm rounded-lg focus:ring-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Sorted By Rates</option>
                            <option className='' value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='text-white font-bold text-xl tracking-wide'>
                Total 0 Items Found
            </div>
            <div className='mt-6 card'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                </div>
            </div>
            <div className='my-12 pagination'>
                <div className='flex justify-center gap-6'>
                    <div className='border-2 rounded border-red-600 px-4 py-2 hover:cursor-pointer hover:bg-red-600'>
                        <TbPlayerTrackPrev className='text-white text-xl'/>
                    </div>
                    <div className='border-2 rounded border-red-600 px-4 py-2 hover:cursor-pointer hover:bg-red-600'>
                        <TbPlayerTrackNext className='text-white text-xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Movies;