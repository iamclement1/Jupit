import Hide from '../../assets/MobileIcons/Hide.svg';
import Naira from 'react-naira'

const CardRows = (rowID) => {
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <section>
            <main className="relative flex group space-x-3 items-center cursor-pointer px-6 ">
                <div className=" w-[250px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-md p-6 "
                    id={'slider' + rowID}>
                    <div className="text-gray-300 flex justify-between  text-xs">
                        <span className='flex items-center space-x-3 mr-2'>Naira Balance <img src={Hide} alt="Hide__icon" className='text-gray-300 ml-2' /> </span>
                        <div>
                            <span className="">Jupit</span>
                        </div>

                    </div>
                    <div className='text-white mt-2 font-semibold block'>
                        <Naira> 89909009</Naira>
                        <div className='font-normal'>
                            = $340.56
                        </div>
                    </div>
                </div>
                {/* <div className="w-[220px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-md p-4"
                    id={'slider' + rowID}>
                    <div className="text-gray-300 flex justify-between  text-xs">
                        <span className='flex items-center space-x-3 mr-2'>Naira Balance <img src={Hide} alt="Hide__icon" className='text-gray-300 ml-2' /> </span>
                        <div>
                            <span className="">Jupit</span>
                        </div>

                    </div>
                    <div className='text-white mt-2 font-semibold block'>
                        <Naira> 89909009</Naira>
                        <div className='font-normal'>
                            = $340.56
                        </div>
                    </div>
                </div> */}

            </main>

            <main>
                <div className='px-6 py-6 space-x-3'>
                    <button className='bg-[#262697] text-white p-3 w-[125px] text-sm font-semibold  rounded-md cursor pointer '>Fund</button>
                    <button className='border-[#262697] outline outline-1 outline-gray-200  text-sm font-semibold text-dark p-3 w-[125px] rounded-md cursor pointer '>Withdraw</button>
                </div>
                <div className='flex justify-between px-6'>
                    <span className='font-semibold'>Assets</span>
                    <span className='font-semibold text-blue-900'>See all</span>
                </div>
            </main>
        </section>
    )
}

export default CardRows;