import { Swiper, SwiperSlide } from "swiper/react"
import CardRows from "./CardRows";
import 'swiper/css';

const SwiperCard = () => {
    return (
        <Swiper
            slidesPerView={"auto"}>
            <SwiperSlide className="!w-max">
                <CardRows />
            </SwiperSlide>
            <SwiperSlide className="!w-max">
                <CardRows />
            </SwiperSlide><SwiperSlide className="!w-max">
                <CardRows />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperCard