'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css';

export default function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      speed={1500}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <SwiperSlide key={i}>Slide {i + 1}</SwiperSlide>
      ))}
    </Swiper>
  );
}
