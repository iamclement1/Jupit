import Notification from '../../assets/MobileIcons/Notification.svg';
import CardRows from './CardRows';

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
            <CardRows />
        </section>
    )
}

export default Card;