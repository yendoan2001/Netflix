import {Select} from "antd";
import {BsFillHeartFill} from "react-icons/bs";

const Home = () => {
    return (
        <div>
            <div>
                <div className='bg-[rgb(11,15,41)] rounded-lg border-gray-800 border my-4 w-full h-[100px] selector'>
                    <div className='text-white h-full w-full grid grid-cols-5 justify-center items-center'>
                        <div className='mx-auto w-[75%]'>
                            <Select
                                defaultValue="lucy"
                                className='w-full'
                                style={{padding: '10px'}}
                                size='large'
                                // onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: 'lucy', label: 'Lucy'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />
                        </div>
                        <div className='mx-auto w-[75%]'>
                            <Select
                                className='w-full'
                                defaultValue="lucy"
                                size='large'
                                // onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: 'lucy', label: 'Lucy'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />
                        </div>
                        <div className='mx-auto w-[75%]'>
                            <Select
                                className='w-full'
                                size='large'
                                defaultValue="lucy"
                                // onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: 'lucy', label: 'Lucy'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />
                        </div>
                        <div className='mx-auto w-[75%]'>
                            <Select
                                className='w-full'
                                size='large'
                                defaultValue="lucy"
                                // onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: 'lucy', label: 'Lucy'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />
                        </div>
                        <div className='mx-auto w-[75%]'>
                            <Select
                                className='w-full'
                                size='large'
                                defaultValue="lucy"
                                // onChange={handleChange}
                                options={[
                                    {value: 'jack', label: 'Jack'},
                                    {value: 'lucy', label: 'Lucy'},
                                    {value: 'Yiminghe', label: 'yiminghe'},
                                    {value: 'disabled', label: 'Disabled', disabled: true},
                                ]}
                            />
                        </div>
                    </div>

                </div>
                <div className='text-white font-bold text-xl tracking-wide'>
                    Total 0 Items Found
                </div>
                <div className='mt-6'>
                    <div className='grid sm:grid-cols-3 2xl:grid-cols-5 gap-6'>
                        <div className='relative rounded-lg border-gray-500 p-1 border bg-black h-max w-full mx-auto'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt=""/>
                            <div className='absolute bg-gray-900 bg-opacity-50 bottom-0 z-100 w-full h-[30%] flex'>
                                <div className='flex justify-between items-center w-[90%] mx-auto'>
                                    <div className='text-white font-bold tracking-wide'>Games Of Thrones</div>
                                    <div className='bg-red-600 p-2 rounded-lg'>
                                        <BsFillHeartFill className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative rounded-lg border-gray-500 p-1 border bg-black h-max w-full mx-auto'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt=""/>
                            <div className='absolute bg-gray-900 bg-opacity-50 bottom-0 z-100 w-full h-[30%] flex'>
                                <div className='flex justify-between items-center w-[90%] mx-auto'>
                                    <div className='text-white font-bold tracking-wide'>Games Of Thrones</div>
                                    <div className='bg-red-600 p-2 rounded-lg'>
                                        <BsFillHeartFill className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative rounded-lg border-gray-500 p-1 border bg-black h-max w-full mx-auto'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt=""/>
                            <div className='absolute bg-gray-900 bg-opacity-50 bottom-0 z-100 w-full h-[30%] flex'>
                                <div className='flex justify-between items-center w-[90%] mx-auto'>
                                    <div className='text-white font-bold tracking-wide'>Games Of Thrones</div>
                                    <div className='bg-red-600 p-2 rounded-lg'>
                                        <BsFillHeartFill className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative rounded-lg border-gray-500 p-1 border bg-black h-max w-full mx-auto'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt=""/>
                            <div className='absolute bg-gray-900 bg-opacity-50 bottom-0 z-100 w-full h-[30%] flex'>
                                <div className='flex justify-between items-center w-[90%] mx-auto'>
                                    <div className='text-white font-bold tracking-wide'>Games Of Thrones</div>
                                    <div className='bg-red-600 p-2 rounded-lg'>
                                        <BsFillHeartFill className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative rounded-lg border-gray-500 p-1 border bg-black h-max w-full mx-auto'>
                            <img src="https://firebasestorage.googleapis.com/v0/b/netflixo-minah.appspot.com/o/cb51cbcb-05cf-43f3-a964-a9f37778bb78.webp?alt=media" alt=""/>
                            <div className='absolute bg-gray-900 bg-opacity-50 bottom-0 z-100 w-full h-[30%] flex'>
                                <div className='flex justify-between items-center w-[90%] mx-auto'>
                                    <div className='text-white font-bold tracking-wide'>Games Of Thrones</div>
                                    <div className='bg-red-600 p-2 rounded-lg'>
                                        <BsFillHeartFill className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;