import { useEffect, useState } from 'react'
// import { getCoinGecko } from './api/coingecko';
import './App.css'
import axios from 'axios';

const App = () => {

  const [coinData, setCoinData] = useState([]);
  const auth_token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('https://pro-api.coingecko.com/api/v3/', {
      headers: {
        Authorization : 'Bearer ' + auth_token,
        ContentType: 'application/json'
      },
    })
    .then((response) => {
      const allCoins = response.data
      setCoinData(allCoins);
      console.log(setCoinData(allCoins));
    })
    .catch ((error) => {
      console.error(error);
    })
  }, [auth_token])



  return (
    <div className="App">
      {
        coinData.map((coin, index) => {
          return (
            <div>
              {data}
            </div>
          )
        })
      }
    </div>
  )
}

export default App
