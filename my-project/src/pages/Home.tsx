import {BsFillSuitHeartFill} from "react-icons/bs";
import {BiCalendar} from "react-icons/bi";
import {AiFillCaretRight, AiOutlineClockCircle, AiOutlineUser} from "react-icons/ai";
import {FaFolderOpen} from "react-icons/fa";
import {ImageCard} from "../components/ImageCard";
import {RatedImageCard} from "../components/RatedImageCard";
import {IoCaretBackOutline} from "react-icons/io5";
import {GiTusksFlag} from "react-icons/gi";

const Home = () => {
    return (
        <div className='px-6'>
            <div className='relative w-full h-full'>
                <img className='lg:object-none object-cover w-full md:h-[400px] h-[200px]'
                     src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/99abbb7b-38b4-4116-895e-34d3a2fc1d00.jpeg?alt=media"
                     alt=""/>
                <div className='absolute top-0 bg-opacity-40 bg-black w-full h-full flex items-center'>
                    <div className='flex flex-col ml-[10%] lg:scale-100 scale-75 text-white gap-4'>
                        <div className='text-4xl font-extrabold tracking-wide'>
                            The Beast
                        </div>
                        <div className='flex justify-between items-center font-bold text-sm'>
                            <div>Thriller</div>
                            <div className='flex justify-between items-center gap-1'>
                                <BiCalendar className='text-red-600'/>
                                2027
                            </div>
                            <div className='flex justify-between items-center gap-1'>
                                <AiOutlineClockCircle className='text-red-600'/>
                                1 Hr
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='bg-red-600 px-8 py-3 rounded-md font-medium'>Watch</div>
                            <div className='bg-gray-500 px-4 py-3 rounded-md'>
                                <BsFillSuitHeartFill/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-4 my-12'>
                <div className='text-red-600 text-2xl'><FaFolderOpen/></div>
                <div className='text-white font-extrabold text-xl tracking-wide'>Popular Movies</div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
            </div>
            <div>
                <div className='bg-[rgb(11,15,41)] w-full min-h-max my-[80px] mx-auto'>
                    <div className='grid md:grid-cols-2 grid-cols-1 mx-[7%] h-full justify-between'>
                        <div className='flex flex-col justify-center gap-10'>
                            <div className='text-white text-xl font-semibold tracking-wide'>Download Your Movies Watch
                                Offline.
                                <br/>
                                Enjoy On Your Mobile
                            </div>
                            <div className='text-gray-400 tracking-wider text-sm'>Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five
                                centuries..
                            </div>
                            <div className='flex justify-start items-center text-red-600 font-extrabold gap-4'>
                                <div className='bg-black px-6 py-3'>HD 4K</div>
                                <div className='flex justify-between items-center gap-3 bg-black px-6 py-3'>
                                    <AiOutlineUser/>
                                    <div>
                                        2K
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://netflixo-ten.vercel.app/images/mobile.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-start items-center gap-4 my-12'>
                <div className='text-red-600 text-2xl'><GiTusksFlag/></div>
                <div className='text-white font-extrabold text-xl tracking-wide'>Top Rated</div>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6'>
                <RatedImageCard/>
                <RatedImageCard/>
                <RatedImageCard/>
                <RatedImageCard/>
            </div>
            <div className='my-12 pagination'>
                <div className='flex justify-center gap-6'>
                    <div
                        className='rounded px-2 py-2 hover:cursor-pointer bg-red-600 hover:bg-[rgb(11,15,41)] hover:transition-all hover:ease-in-out hover:duration-500 transition-all ease-in-out duration-500'>
                        <IoCaretBackOutline className='text-white text-xl'/>
                    </div>
                    <div
                        className='rounded px-2 py-2 hover:cursor-pointer bg-red-600 hover:bg-[rgb(11,15,41)] hover:transition-all hover:ease-in-out hover:duration-500 transition-all ease-in-out duration-500'>
                        <AiFillCaretRight className='text-white text-xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;