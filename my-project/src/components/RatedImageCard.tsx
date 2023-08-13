
import {AiFillHeart} from "react-icons/ai";
import {Rate} from "antd";

export const RatedImageCard = () => {
    return (
        <div>
            <div className='rounded-lg border-gray-500 p-1 border bg-black h-[400px] w-full'>
                <div className='bg-[url("https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/c62905c1-7b7d-4da9-85d0-c3f94467546a.webp?alt=media")]
                bg-cover bg-center bg-no-repeat w-full h-full'>
                    <div className="group relative hover:bg-black hover:bg-opacity-70 hover:left-0 hover:rounded-lg hover:w-full w-full h-full transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300">
                        <div className='absolute hidden group-hover:block group-hover:flex items-center justify-center w-full h-full mx-auto text-white'>
                            <div className='flex flex-col items-center justify-center mx-auto gap-4'>
                                <div className='p-4 bg-white bg-opacity-30 rounded-[2.5rem] hover:cursor-pointer hover:bg-red-600 transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300'><AiFillHeart className='h-5 w-5'/></div>
                                <div className='font-bold text-xl tracking-wide'>Black Panther</div>
                                <div><Rate disabled allowHalf defaultValue={2.5}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}