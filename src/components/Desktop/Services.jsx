
import Flash from '../../assets/DesktopIcons/flash.svg';
import EmptyWallet from '../../assets/DesktopIcons/empty-wallet.svg';
import BuyCrypto from '../../assets/DesktopIcons/buy-crypto.svg';
import Ranking from '../../assets/DesktopIcons/ranking.svg';
import BigStar from '../../assets/DesktopIcons/big-star-img.svg';

const Services = () => {
    return (
        <>
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
                    <div className="flex justify-between lg:w-3/5 m-auto">
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

                    <div className="flex justify-between lg:w-3/5 m-auto">
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

export default Services;