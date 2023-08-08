import {BsFillHeartFill} from "react-icons/bs";

export const ImageCard = () => {
    return(
        <div>
            <div className='relative rounded-lg border-gray-500 p-1 border bg-black h-full sm:h-[270px] w-full mx-auto hover:scale-95 hover:cursor-pointer hover:transition-all transition-all ease-in-out duration-300 hover:ease-in-out hover:duration-300'>
                <img className='sm:object-cover sm:h-full'
                     src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media"
                     alt=""/>
                <div className='absolute bg-gray-900 bg-opacity-50 bottom-0 z-100 w-full h-[25%] flex'>
                    <div className='flex justify-between items-center w-[90%] mx-auto'>
                        <div className='text-white font-bold tracking-wide'>Games Of Thrones</div>
                        <div className='bg-red-600 hover:bg-opacity-0 hover:transition-all hover:ease-in-out hover:duration-300 transition-all ease-in-out duration-300 border-red-600 rounded-lg border-2 p-2 rounded-lg'>
                            <BsFillHeartFill className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}