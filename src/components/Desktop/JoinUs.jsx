import btc from '../../assets/DesktopIcons/btc.svg';
import eth from '../../assets/DesktopIcons/eth.svg';
import naira from '../../assets/DesktopIcons/naira.svg';

const JoinUs = () => {
    return (
        <>
            <img src={btc} alt="btc-image" className='relative md:w-[70px] lg:w-[90px] xl:w-[90px] inset-x-3/4 top-12 ' />
            <div className="bg-[#3333AD] w-4/6 m-auto p-12 rounded-md">
            <img src={naira} alt="naira--currency--log" className='absolute w-[90px] right-48   ' />
                <div className=" w-full flex flex-col justify-center">
                    <h1 className="text-white text-center text-sm lg:text-xl xl:text-xl lg:w-3/5 xl:w-3/5 md:w-4/5 m-auto font-semibold font-poppins md:border lg:border-0">
                        Join our 3,620 and counting user today and start tranacting seamlessly.
                    </h1>
                    <div className="lg:w-1/5 xl:w-1/5 m-auto ">
                        <button className="text-[#1C1F90] bg-[#F4A039] px-5 py-3 rounded-md mt-4">
                            Get started
                        </button>
                    </div>
                </div>
                    <img src={eth} alt="eth__logo" className='absolute w-[90px] ' />
            </div>
        </>
    )
}

export default JoinUs