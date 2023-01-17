import Avatar from '../../assets/DesktopImg/Avatar-1.svg';
import starImg from '../../assets/DesktopIcons/star-image.svg';


const UserTestCard = () => {
    return (
        <>
            {/* User testimonies sessions  */}
            <main className='w-full bg-[#1C1D93] '>
                <img src={starImg} alt="" className='relative inset-x-3/4 top-64' />
                <div className='text-center text-white py-24'>
                    <h1 className="font-bold text-4xl m-auto md:w-2/5 lg:w-1/4 py-4 mb-2">
                        See what users' say about us
                    </h1>
                    <p className='md:w-[400px] lg:w-[480px] m-auto mt-4'>
                        This testimonies are much more; join us so we can hear your testimonies too
                    </p>
                </div>

                {/* user testimonies card */}
                <div className="flex justify-center space-x-4 p-2  pb-8">
                    <div className='bg-white w-1/2 lg:w-1/3 xl:w-1/3 md:p-3 lg:p-6 xl:p-6 rounded-md'>
                        <div className="w-16 h-16 bg-[#DDFFE7] rounded-full border border-black p-2 mt-4 mx-auto ">
                            <img src={Avatar} alt="avatar__img" />
                        </div>
                        <p className='text-[#1C1D93] font-poppins py-2 text-center'>
                            Eji Jupit
                        </p>
                        <p className='text-[#FFA000] font-bold text-center text-xl mb-3 '>
                            All your crypto in one place
                        </p>
                        <p className='text-gray-600 text-xs text-center md:3/6 lg:w-5/6 xl:w-5/6 md:px-5.5 lg:px-3.5  xl:px-3.5 m-auto mb-3'>
                            We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you can enjoy the result without any stress.
                        </p>
                    </div>

                    <div className='bg-white w-1/2 lg:w-1/3 xl:w-1/3 md:p-3 lg:p-6 xl:p-6 rounded-md'>
                        <div className="w-16 h-16 bg-[#DDFFE7] rounded-full border border-black p-2 mt-4 mx-auto ">
                            <img src={Avatar} alt="avatar__img" />
                        </div>
                        <p className='text-[#1C1D93] font-poppins py-2 text-center'>
                            Eji Jupit
                        </p>
                        <p className='text-[#FFA000] font-bold text-center text-xl mb-3 '>
                            All your crypto in one place
                        </p>
                        <p className='text-gray-600 text-xs text-center md:3/6 lg:w-5/6 xl:w-5/6 md:px-5.5 lg:px-3.5  xl:px-3.5 m-auto mb-3'>
                            We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you can enjoy the result without any stress.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center space-x-1 pb-4">
                    <div className="h-2 w-2 rounded-full bg-[#FFA000]"></div>
                    <div className="h-2 w-2 rounded-full bg-[#ffa20071]"></div>
                    <div className="h-2 w-2 rounded-full bg-[#ffa2002d]"></div>
                </div>
            </main>
        </>
    )
}
export default UserTestCard;