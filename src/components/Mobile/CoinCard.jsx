import { coinList } from '../../api/coin.js'
const CoinCard = () => {
    return (
        <div className='container flex flex-wrap justify-around px-6 space-x-2  '>
            {
                coinList.map((coin, id) => {
                    return (
                        <>
                        <div className="max-w-sm rounded-md overflow-hidden shadow-md bg-white p-2 border border-gray-300 w-[120px]" key={id}>
                            <img src={coin.img} alt="" className='mb-2'/>
                            <span className='font-semibold text-black block'> {coin.amt} </span>
                            <span className='text-gray-500 text-sm'> {coin.currency} </span>
                            <div className="flex space-x-2">
                                <img src={coin.sign} alt="" />
                                <span> {coin.rate} </span>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default CoinCard

