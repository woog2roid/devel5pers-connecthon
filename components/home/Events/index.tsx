import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Events() {
  const items = [
    'https://lotteblog.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2020/06/KakaoTalk_20200610_102040743.png',
    'https://skinnonews.com/wp-content/uploads/2018/10/181025_IgreenWegreen%EC%BA%A0%ED%8E%98%EC%9D%B8_%EB%A9%94%EC%9D%B8.jpg',
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      style={{ height: '150px' }}
      autoplay={{
        delay: 5000,
      }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Image src={item} alt="carousel images" layout="fill" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
