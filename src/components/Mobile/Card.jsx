import Notification from '../../assets/MobileIcons/Notification.svg';
import SwiperCard from './SwiperCard';

const Card = () => {
    return (
        <section>
            <main className="flex justify-between px-6 py-5">
                <div className='font-xl text-gray-600'>
                    <h3>Hi <span className='font-bold'>Femi</span></h3>
                </div>
                <div>
                    <img src={Notification} alt="Notification__icon" className='absolute' />
                    <div className=' rounded-full w-5 h-5 bg-red-400 text-center text-white font-bold text-sm m-auto relative top-0 left-3'>3</div>
                </div>
            </main>
            <SwiperCard />
            <div className='flex justify-center mt-4 space-x-1'>
                <div className="w-2 h-2 bg-gray-600 rounded-full "></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full "></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full "></div>
            </div>
        </section>
    )
}

export default Card;