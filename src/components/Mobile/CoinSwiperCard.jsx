import { Swiper, SwiperSlide } from "swiper/react"
import CoinCard from "./CoinCard";
import 'swiper/css';


const CoinSwiperCard = () => {
    return (
        <Swiper
            slidesPerView={"auto"}>
            <SwiperSlide className="!w-max">
                <CoinCard />
            </SwiperSlide>
            <SwiperSlide className="!w-max">
                <CoinCard />
            </SwiperSlide><SwiperSlide className="!w-max">
                <CoinCard />
            </SwiperSlide>
        </Swiper>
    )
}

export default CoinSwiperCard