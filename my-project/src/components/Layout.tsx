export const LayOut = () => {
    return (
        <div className='bg-red-50 max-w-screen-2xl container mx-auto'>
            <div className='bg-black h-[100px] text-white p-4 flex items-center nav_bar'>
                <div className='basis-1/6 logo'>
                    <img className='w-[60%]' src="https://netflixo-ten.vercel.app/images/logo.png" alt=""/>
                </div>
                <div className='basis-3/6 search_input'>
                    <div>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute bg-red-600 w-[50px] inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                   className="block w-[80%] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                                   placeholder="Search Mockups, Logos..." required/>
                        </div>
                    </div>
                </div>
                <div className='basis-2/6 flex justify-between gap-6 options'>
                    <a href="">Movies</a>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Profile</a>
                    <a href="">Heart</a>
                </div>
            </div>
            <div className='main'>
                main
            </div>
            <div className='footer'>
                footer

            </div>
        </div>

    )
}