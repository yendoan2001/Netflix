import {ContactCard} from "../components/ContactCard.tsx";

export const Contact = () => {
    return (
        <div className='px-6'>
            <div className='relative w-full h-full'>
                <img className='object-cover w-full md:h-[300px] lg:h-[400px] h-[200px]'
                     src="https://netflixo-ten.vercel.app/images/head.png"
                     alt=""/>
                <div className='absolute top-0 bg-opacity-40 bg-black w-full h-full flex items-center'>
                    <div className='text-white font-bold text-3xl lg:text-5xl mx-auto'>Contact Us</div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 w-full h-full mx-auto gap-8 my-10'>
                <ContactCard/>
                <ContactCard/>
                <ContactCard/>
            </div>

        </div>
    )
}