// https://api.coingecko.com/api/v3/coins/list


import axios from "axios";

const URL = `https://api.coingecko.com/api/v3/coins/list`

export const getCoinGecko = () => {
    const [coinData, setCoinData] = useState([]);
    const auth_token = localStorage.getItem('token');
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
            .then((response) => {
                const allCoins = response.data
                // setCoinData(allCoins);
                // console.log(setCoinData(allCoins));
                console.log(allCoins);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])
}
