import iPhone from '../../assets/DesktopImg/iPhone.png';
import { BsCheck } from 'react-icons/bs';
import { UserTestCard } from '../../components/Desktop';
import starImg from '../../assets/DesktopIcons/star-image.svg';
const CTA = () => {
    return (
        <>
            <section>
                <main className='flex justify-between m-auto w-5/6 bg-[#EDEDF6] rounded-md '>
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
                {/* User testimonies sessions  */}
                <main className='w-full bg-[#1C1D93] '>
                    <img src={starImg} alt="" className='relative inset-x-3/4 top-64'/>
                    <div className='text-center text-white py-24'>
                        <h1 className="font-bold text-4xl m-auto w-1/4 py-4 mb-2">
                            See what users' say about us
                        </h1>
                        <p className='w-[480px] m-auto mt-4'>
                            This testimonies are much more; join us so we can hear your testimonies too
                        </p>
                    </div>

                    {/* user test card cmp */}
                    <UserTestCard />
                </main>
            </section>
        </>
    )
}

export default CTA;