import {AiFillHeart, AiOutlineLogout, AiOutlineSetting} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {Link} from "react-router-dom";

export const PrivateOptionCard = () => {
    const pathName = window.location.pathname
    return(
        <div>
            <div className='basis-1/4 grid grid-col-1 w-full bg-[rgb(11,15,41)] text-white border border-gray-800 rounded-lg p-5 mt-8'>
                <Link to='/user/profile'>
                    <div className={pathName==='/user/profile'?'flex justify-start items-center gap-6 bg-[rgb(224,213,213)] text-red-600 p-3 rounded-md hover:cursor-pointer':'flex justify-start items-center gap-6 hover:cursor-pointer hover:bg-[rgb(8,10,26)] hover:h-full p-3 rounded-md'}>
                        <div className=''><AiOutlineSetting/></div>
                        <div className='font-semibold'>Update Profile</div>
                    </div>
                </Link>
                <Link to='/user/favorite'>
                    <div className={pathName==='/user/favorite'?'flex justify-start items-center gap-6 bg-[rgb(224,213,213)] text-red-600 p-3 rounded-md hover:cursor-pointer':'flex justify-start items-center gap-6 hover:cursor-pointer hover:bg-[rgb(8,10,26)] hover:h-full p-3 rounded-md'}>
                        <div><AiFillHeart/></div>
                        <div className='font-semibold'>Favorite Movies</div>
                    </div>
                </Link>
                <Link to='/user/password'>
                    <div className={pathName==='/user/password'?'flex justify-start items-center gap-6 bg-[rgb(224,213,213)] text-red-600 p-3 rounded-md hover:cursor-pointer':'flex justify-start items-center gap-6 hover:cursor-pointer hover:bg-[rgb(8,10,26)] hover:h-full p-3 rounded-md'}>
                        <div><RiLockPasswordLine/></div>
                        <div className='font-semibold'>Change Password</div>
                    </div>
                </Link>
                <Link to='/auth/logout'>
                    <div className={pathName==='/auth/logout'?'flex justify-start items-center gap-6 bg-[rgb(224,213,213)] text-red-600 p-3 rounded-md hover:cursor-pointer':'flex justify-start items-center gap-6 hover:cursor-pointer hover:bg-[rgb(8,10,26)] hover:h-full p-3 rounded-md'}>
                        <div><AiOutlineLogout/></div>
                        <div className='font-semibold'>Log Out</div>
                    </div>
                </Link>
            </div>
        </div>
    )
}