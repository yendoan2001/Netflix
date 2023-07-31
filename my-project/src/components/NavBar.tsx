export const NavBar = () => {
    return (
        <div className='bg-black h-[100px] text-white p-4 flex items-center'>
            <div className='logo basis-1/6'>
                <img className='w-[60%]' src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
            </div>
            <div className='search_input basis-3/6'>
                <input type="text"/>
            </div>
            <div className='options basis-2/6 flex justify-between gap-6'>
                <a href="">Movies</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <a href="">Profile</a>
                <a href="">Heart</a>
            </div>
        </div>
    )
}