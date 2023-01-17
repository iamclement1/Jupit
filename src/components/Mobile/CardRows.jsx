import Hide from '../../assets/MobileIcons/Hide.svg';
import Naira from 'react-naira'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const CardRows = (props) => {

    return (
        <section className=''>
            <main className="relative flex group space-x-3 items-center cursor-pointer px-6 ">
                <div className=" w-[280px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-md p-6 ">
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
            </main>
        </section>
    )
}

export default CardRows;