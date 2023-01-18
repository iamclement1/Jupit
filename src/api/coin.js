// import bitcoin from '../../../assets/logos_bitcoin.svg';
// import crypto from '../../cryptocurrency-color_eth';
// import image from '../../Group.svg';
// import positive from '../../Arrow-Up Circle.svg';
// import negative from '../../Arrow-Down Circle.svg';
import bitcoin from '../assets/MobileIcons/logos_bitcoin.svg'
import crypto from '../assets/MobileIcons/cryptocurrency-color_eth.svg';
import image from '../assets/MobileIcons/Group.svg';
import positive from '../assets/MobileIcons/Arrow-Up-Circle.svg';
import negative from '../assets/MobileIcons/Arrow-Down-Circle.svg';

export const coinList = [
    {
        id: 1,
        img: image,
        amt: "$1.05",
        currency: "USDT",
        sign: positive,
        rate: '0-65%'
    },
    {
        id: 2,
        img: bitcoin,
        amt: "16,650.37",
        currency: "Bitcoin",
        sign: negative,
        rate: '-0.65%'
    },
    {
        id: 3,
        img: crypto,
        amt: "$1,207.19",
        currency: "Ethereum",
        sign: positive,
        rate: '0.65%'
    },
    {
        id: 4,
        img: crypto,
        amt: "$1,207.19",
        currency: "Ethereum",
        sign: positive,
        rate: '0.65%'
    }
]