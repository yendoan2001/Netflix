import {Select} from "antd";
import {ImageCard} from "../components/ImageCard";
import {TbPlayerTrackNext, TbPlayerTrackPrev} from "react-icons/tb";

const Movies = () => {
    return (
        <div className='px-6'>
            <div className='bg-[rgb(11,15,41)] rounded-lg border-gray-800 border my-4 mx-auto h-max p-6 selector'>
                <div className='text-white w-full xl:gap-12 gap-4 grid md:grid-cols-5 grid-cols-2 justify-center items-center'>
                    <div className='mx-auto w-full'>
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
                    <div className='mx-auto w-full'>
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
                    <div className='mx-auto w-full'>
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
                    <div className='mx-auto w-full'>
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
                    <div className='mx-auto w-full'>
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