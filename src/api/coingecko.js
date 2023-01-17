// https://api.coingecko.com/api/v3/coins/list


import axios from "axios";
import { useEffect } from "react";

// const URL = `https://api.coingecko.com/api/v3/coins/list`

export const getCoinGecko = () => {
    const {data} = axios.get('https://api.coingecko.com/api/v3/coins/list')
    return data;

}
