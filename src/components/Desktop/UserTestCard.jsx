import Avatar from '../../assets/DesktopImg/Avatar-1.svg';

const UserTestCard = () => {
    return (
        <section>
            <main className="flex justify-center space-x-3  ">
                <div className='bg-white w-2/6 rounded-md p-5'>
                    <div className='m-auto mt-5 mb-2 w-16 h-16 rounded-full bg-[#DDFFE7] p-3 border border-black '>
                        <img src={Avatar} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <p className='font-poppins text-sm text-[#1C1D93]'>
                            Femi Jupit
                        </p>
                        <p className='text-[#FFA000] font-bold text-2xl py-2 '>
                            All your crypto in one place
                        </p>
                        <p className='text-sm w-[360px] m-auto text-gray-500'>
                            We make sure that every cryptocurrency payment and transactions are processed seamlessly and quickly so that you could enjoy the result without any stress.
                        </p>
                    </div>
                </div>

                {/* card 2 */}

                <div className='bg-white w-2/6 rounded-md p-5'>
                    <div className='m-auto mt-5 mb-2 w-16 h-16 rounded-full bg-[#DDFFE7] p-3 border border-black '>
                        <img src={Avatar} alt="" />
                    </div>
                    <div className='text-center py-2'>
                        <p className='font-poppins text-sm text-[#1C1D93]'>
                            Femi Jupit
                        </p>
                        <p className='text-[#FFA000] font-bold text-2xl py-2 '>
                            All your crypto in one place
                        </p>
                        <p className='text-sm w-[360px] m-auto text-gray-500'>
                            We make sure that every cryptocurrency payment and transactions are processed seamlessly and quickly so that you could enjoy the result without any stress.
                        </p>
                    </div>
                </div>

            </main>
            {/* slider indicator */}
            <div className='flex justify-center space-x-1 py-6'>
                <div className='w-2 h-2 bg-[#FFA000] rounded-full '></div>
                <div className='w-2 h-2 bg-[#ffa200a6] rounded-full '></div>
                <div className='w-2 h-2 bg-[#ffa20053] rounded-full '></div>
            </div>
        </section>
    )
}
export default UserTestCard;