import HeroImage from '../../assets/DesktopImg/HeroImage.png'
import Ellipse from '../../assets/DesktopIcons/Ellipse.svg';
import Profile from '../../assets/DesktopIcons/Profile.svg';
import GroupIcon from '../../assets/DesktopIcons/Group.svg';

const Hero = () => {
    return (
        <>
            <section>
                <main className="flex justify-between md:px-8 lg:px-16">
                    <div className="md:w-3/5 lg:w-3/6 lg:py-12 leading-6">
                        <h1 className="md:text-2xl lg:text-4xl font-bold md:w-4/4 lg:w-4/5 text-[#040415] leading-relaxed md:mt-20 lg:mt-32">
                            Make easy digital assets transactions anywhere, anytime with Jupit.
                        </h1>
                        <p className="md:text-xs lg:text-sm md:w-6/6 lg:w-4/6 md:py-3 lg:py-3">
                            A place for everyone who wants to simply buy and sell digital assets, it just takes 120 seconds.
                        </p>
                        <button className='bg-[#ffa000] text-blue-900 font-bold py-3 px-6 mt-3 rounded cursor-pointer'>
                            Get Started
                        </button>
                    </div>
                    <div className=' '>
                        <img src={HeroImage} alt="Hero_image" className='relative inset-x-0 top-0 md:w-[440px] lg:w-[540px]' />
                        <div className='absolute md:mt-24 lg:mt-0 xl:mt-0 md:inset-y-1/3 lg:inset-y-1/3 lg:inset-x-1/2 bg-white md:w-[180px] lg:w-[280px] md:h-[200px] lg:h-[250px] p-3 shadow-md rounded-md'>
                            <div className='flex justify-between'>
                                <span className=' md:px-3 lg:px-12 text-gray-400 font-normal'>Buy</span>
                                <span className='text-gray-300'> | </span>
                                <span className=' md:px-3 lg:px-12 text-[#262697] font-normal'>Sell</span>
                            </div>
                            <p className='text-center md:text-sm lg:text-xl text-gray-400'>
                                Ethereum Price
                            </p>
                            <p className='text-center text-black md:text-sm lg:text-lg font-normal py-1'>
                                $3.110,31
                            </p>
                            <form action="" className='relative space-y-2'>
                                <input className="appearance-none border rounded w-full md:py-1 lg:py-2 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                <img src={GroupIcon} alt="" className='absolute top-5 left-28 ' />
                                <input className="appearance-none border rounded w-full md:py-1 lg:py-2 lg:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                                <div>
                                    <label htmlFor=""></label>
                                    <button className="bg-[#262697] w-full uppercase text-white md:py-1 lg:py-2 lg:px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                                        sell
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='md:w-[300px] lg:w-[350px] flex shadow-md rounded-lg px-6 py-3 space-x-5 absolute md:bottom-14 lg:bottom-8 md:right-10 lg:right-12 bg-white'>
                            <img src={Ellipse} alt="" className='lg:w-[60px] md:w-[40px]' />
                            <div>
                                <span className='text-[#262697] font-semibold md:text-sm'>
                                    Transaction Successful!
                                </span>
                                <hr className="border-b-4 mt-1" />
                                <hr className="border-b-4 mt-2 w-[120px]" />
                            </div>
                        </div>
                        <div className='md:w-[300px] lg:w-[350px] flex shadow-md rounded-lg px-6 py-3 space-x-5 absolute bg-white md:left-1/4 lg:left-2/4 xl:left-2/4 lg:top-full lg:mt-12 xl:mt-12'>
                            <img src={Profile} alt="" className='lg:w-[60px]' />
                            <div>
                                <span className='text-[#262697] font-semibold md:text-xs lg:text-[15px] '>
                                    Paul just sent you 500 USDT
                                </span>
                                <hr className="border-b-4 mt-1" />
                                <hr className="border-b-4 mt-2 w-[120px]" />
                            </div>
                        </div>
                    </div>
                </main>

            </section>
        </>
    )
}
export default Hero