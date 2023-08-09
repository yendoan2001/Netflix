import {FaRegEnvelope} from "react-icons/fa";

export const ContactCard = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full h-full bg-[rgb(11,15,41)] text-white gap-4 border border-gray-500 rounded-lg px-8 py-12'>
            <div className='bg-black rounded-[2.5rem] p-4'><FaRegEnvelope className='text-red-600 text-lg'/></div>
            <div className='text-xl font-bold tracking-wide'>Email Us</div>
            <div className='flex justify-center gap-1'>
                <div className='text-blue-600 hover:cursor-pointer'>info@zpunet.com</div>
                <div className='text-gray-400 font-semibold'>Interactively grow backend ideas for cross-platform models.
                </div>
            </div>
        </div>
    )
}