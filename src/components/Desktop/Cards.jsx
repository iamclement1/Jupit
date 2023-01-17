import Vector1 from '../../assets/DesktopIcons/Vector1.svg';
import Vector from '../../assets/DesktopIcons/Vector.svg';
import { FaArrowRight } from 'react-icons/fa'
import Star from '../../assets/DesktopIcons/star-img.svg';
import Flash from '../../assets/DesktopIcons/flash.svg';
import EmptyWallet from '../../assets/DesktopIcons/empty-wallet.svg';
import BuyCrypto from '../../assets/DesktopIcons/buy-crypto.svg';
import Ranking from '../../assets/DesktopIcons/ranking.svg';
import BigStar from '../../assets/DesktopIcons/big-star-img.svg';


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

            <section>
                <div className='flex justify-end relative bottom-7'>
                    <img src={BigStar} alt="big_start_icon" />
                </div>
                <main>
                    <div className='text-center md:py-8 lg:py-12'>
                        <h1 className='font-bold text-4xl mb-3 m-auto w-[460px] '>
                            Best services that works for you
                        </h1>
                        <p className='py-5 text-gray-500 w-[610px] m-auto'>
                            We provide a wide range of services to our users. Take a look at a few of the solutions to expect from us.
                        </p>
                    </div>
                    {/* services */}
                    <div className="flex justify-between w-3/5 m-auto">
                        <div className='text-center px-6 py-6'>
                            <div className='bg-[#F2921D26] rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                                <img src={Flash} alt="Flash__icon" />
                            </div>
                            <h1 className='mt-8 font-bold text-xl text-[#090931] '>Fast Transaction</h1>
                            <p className='text-gray-500 px-4 py-4 w-[290px] text-sm'>
                                Fast and easy to use trading services in one integrated platform.
                            </p>
                        </div>

                        <div className='text-center px-6 py-6'>
                            <div className='bg-[#F2921D26] rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                                <img src={EmptyWallet} alt="Flash__icon" />
                            </div>
                            <h1 className='mt-8 font-bold text-xl text-[#090931] '>
                                Secure Wallet
                            </h1>
                            <p className='text-gray-500 px-4 py-4 w-[290px] text-sm'>
                                Fast and easy to use trading services in one integrated platform.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between w-3/5 m-auto">
                        <div className='text-center px-6 py-6'>
                            <div className='bg-[#F2921D26] rounded-full p-3 w-12 h-12 mx-auto mt-6'>
                                <img src={BuyCrypto} alt="Flash__icon" />
                            </div>
                            <h1 className='mt-8 font-bold text-xl text-[#090931] '>Built for you</h1>
                            <p className='text-gray-500 px-4 py-4 w-[270px] text-sm text-center'>
                                We want anyone & everyone in need of cryptocurrency gets prompt and clear access to their transaction.
                            </p>
                        </div>

                        <div className='text-center px-6 py-6'>
                            <div className='bg-[#F2921D26] rounded-full p-3 w-14 h-22 mx-auto mt-6'>
                                <img src={Ranking} alt="Flash__icon" className='w-5/5 ' />
                            </div>
                            <h1 className='mt-8 font-bold text-xl text-[#090931] '>
                                Customer First
                            </h1>
                            <p className='text-gray-500 px-4 py-4 w-[290px] text-sm'>
                                We pride ourselves on providing excellent customer service
                            </p>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Cards;