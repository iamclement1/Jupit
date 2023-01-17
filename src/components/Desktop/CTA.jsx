import iPhone from '../../assets/DesktopImg/iPhone.png';
import { BsCheck } from 'react-icons/bs';
const CTA = () => {
    return (
        <>
            <section>
                {/* Desktop */}
                <section className='md:hidden lg:block xl:block '>
                    <main className='flex justify-between m-auto w-5/6 bg-[#EDEDF6] rounded-md'>
                        <div className='p-12 w-[100em]'>
                            <h1 className='text-[#040415] font-bold text-2xl mb-2 font-montserrat '>
                                We make crypto easy
                            </h1>
                            <p className='text-gray-500 text-xs w-6/6 font-poppins mb-4'>
                                We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you can enjoy the result without stress.
                            </p>
                            {/* list */}
                            <div className='space-y-5'>
                                <div className='flex items-center space-x-6'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Instant Transaction
                                    </p>
                                </div>
                                {/* second list */}
                                <div className='flex items-center space-x-6'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Low Fee
                                    </p>
                                </div>
                                {/* Third list */}
                                <div className='flex items-center space-x-6'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Seamless Experience
                                    </p>
                                </div>
                                {/* fourth list */}
                                <div className='flex items-center space-x-6'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Real Time Value
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE PHONE DISPLAY */}
                        <div className=' w-[140em]'>
                            <img src={iPhone} alt="iphone__image" className='mt-12' />
                        </div>
                    </main>

                </section>

                {/* Tablet */}
                <section className='md:block lg:hidden xl:hidden'>
                    <main className='flex justify-between m-auto w-5/6 bg-[#EDEDF6] rounded-md'>
                        <div className='p-12 w-full text-center'>
                            <h1 className='text-[#040415] font-bold text-2xl mb-2 font-montserrat '>
                                We make crypto easy
                            </h1>
                            <p className='text-gray-500 text-xs w-6/6 font-poppins mb-4'>
                                We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you can enjoy the result without stress.
                            </p>
                            {/* list */}
                            <div className="flex justify-center mb-6">
                                <div className='flex items-center space-x-6 mr-26'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Instant Transaction
                                    </p>
                                </div>
                                {/* second list */}
                                <div className='flex items-center space-x-6 ml-24'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Low Fee
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-9">
                                {/* Third list */}
                                <div className='flex items-center space-x-6'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Seamless Experience
                                    </p>
                                </div>
                                {/* fourth list */}
                                <div className='flex items-center space-x-6'>
                                    <BsCheck className='w-8 h-8 bg-[#F2921D] rounded-full text-white' />
                                    <p className='text-[#040415] font-semibold '>
                                        Real Time Value
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE PHONE DISPLAY */}
                        {/* <div className=' w-[140em] md:hidden'>
                            <img src={iPhone} alt="iphone__image" className='mt-12' />
                        </div> */}
                    </main>
                </section>
            </section>
        </>
    )
}

export default CTA;