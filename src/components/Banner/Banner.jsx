import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // import Swiper styles
import { Autoplay } from 'swiper/modules';

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.avif",
  "/images/banner4.jpg",
];

const Banner = () => {
  return (
    <Swiper
    modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="lg:h-[500px] mt-8 lg:mt-14"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image} 
            alt={`Slide ${index + 1}`}
            className="w-full origin-center rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
