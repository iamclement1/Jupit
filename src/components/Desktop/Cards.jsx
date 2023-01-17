import Vector1 from '../../assets/DesktopIcons/Vector1.svg';
import Vector from '../../assets/DesktopIcons/Vector.svg';
import { FaArrowRight } from 'react-icons/fa'
import Star from '../../assets/DesktopIcons/star-img.svg';


const Cards = () => {
    return (
        <>
            <section className='bg-gray-200 w-full'>
                <div className="flex jusity-between items-center align-center md:px-6 lg:px-20 md:space-x-3 lg:space-x-6 md:py-8 lg:py-12">
                    <div className='bg-white rounded-3xl shadow-md lg:px-2'>
                        <div className='bg-white shadow-md rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                            <img src={Vector1} alt="vector" className=' md:w-[20px] lg:w-[22px] ' />
                        </div>
                        <div className='w-full'>
                            <p className='text-gray-700 text-center mb-2 text-xl font-normal md:mt-2 '>Fast Transaction</p>
                            <p className='text-xs text-center lg:w-5/6 m-auto leading-normal text-gray-600'>
                                Invest in crypto anytime, anywhere with our safe, secure and easy to use online platform.
                            </p>
                            <div className="flex items-center space-x-3 justify-center py-5 text-sm text-[#262697] cursor-pointer" type="button">
                                <p className=''>Get started </p> <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl shadow-md px-2'>
                        <div className='bg-white shadow-md rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                            <img src={Vector1} alt="vector" className='w-[22px] ' />
                        </div>
                        <div>
                            <p className='text-gray-700 text-center mb-2 text-xl font-normal mt-2'>Secure Wallet</p>
                            <p className='text-xs text-center lg:w-5/6 m-auto leading-normal text-gray-600'>
                                Invest in crypto anytime, anywhere with our safe, secure and easy to use online platform.
                            </p>
                            <div className="flex items-center space-x-3 justify-center py-5 text-sm text-[#262697] cursor-pointer" type="button">
                                <p className=''>Get started </p> <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-3xl shadow-md px-2'>
                        <div className='bg-white shadow-md rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                            <img src={Vector1} alt="vector" className='w-[22px] ' />
                        </div>
                        <div>
                            <p className='text-gray-700 text-center mb-2 text-xl font-normal mt-2'>Built for you</p>
                            <p className='text-xs text-center lg:w-5/6 m-auto leading-normal text-gray-600'>
                                Invest in crypto anytime, anywhere with our safe, secure and easy to use online platform.
                            </p>
                            <div className="flex items-center space-x-3 justify-center py-5 text-sm text-[#262697] cursor-pointer" type="button">
                                <p className='text-sm'>Get started </p> <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#262697] rounded-3xl shadow-md px-2'>
                        <div className='bg-[#4546a3] shadow-gray-200 rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                            <img src={Vector} alt="vector" className='w-[22px] ' />
                        </div>
                        <div>
                            <p className='text-white text-center mb-2 text-xl font-normal mt-2'>Customer First</p>
                            <p className='text-xs text-center lg:w-5/6 m-auto leading-normal text-white'>
                                Invest in crypto anytime, anywhere with our safe, secure and easy to use online platform.
                            </p>
                            <div className="flex items-center space-x-3 justify-center py-5 text-sm text-white cursor-pointer" type="button">
                                <p className=''>Get started </p> <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={Star} alt="" />
            </section>
        </>
    )
}

export default Cards;