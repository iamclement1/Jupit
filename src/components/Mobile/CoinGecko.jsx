import { useEffect, useState } from "react";
import axios from "axios";
import CoinSwiperCard from "./CoinSwiperCard.jsx";

const CoinGecko = () => {
    // const [coinData, setCoinData] = useState([]);
    // const url = 'https://api.coingecko.com/api/v3/coins/list'
    // useEffect(() => {
    //     axios.get(url)
    //         .then((response) => {
    //             const coin = response.data;
    //             // console.log(coin);
    //             setCoinData(coin)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, [])

    return (
        <>
            <main>
                <div className='px-6 py-6 flex justify-between'>
                    <button className='bg-[#262697] text-white p-3 w-[145px] text-sm font-semibold  rounded-md cursor pointer '>Fund</button>
                    <button className='border-[#262697] outline outline-1 outline-gray-200  text-sm font-semibold text-dark p-3 w-[145px] rounded-md cursor pointer '>Withdraw</button>
                </div>
                <div className='flex justify-between px-6 py-1 mb-4'>
                    <span className='font-semibold'>Assets</span>
                    <span className='font-semibold text-blue-900'>See all</span>
                </div>
                <CoinSwiperCard />
            </main>
        </>
    )
}

export default CoinGecko;

