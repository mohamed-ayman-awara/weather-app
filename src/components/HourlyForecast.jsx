import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HourlyForecast = ({ hours }) => {
  return (
    <div className="mt-6">
      <Swiper spaceBetween={10} slidesPerView={4}>
        {hours.map((hour, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white/20 rounded-xl p-3 text-center">
              <p className="text-xs">
                {hour.time.split(" ")[1]}
              </p>
              <img src={hour.condition.icon} className="mx-auto" />
              <p>{Math.round(hour.temp_c)}°</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HourlyForecast;
