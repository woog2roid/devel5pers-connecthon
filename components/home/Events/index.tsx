import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Events() {
  const items = [
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/04/pEMzfCNbXjPIYqcfBJERoYJfyzLjeEsQ.png',
    'https://mediahub.seoul.go.kr/uploads/mediahub/2021/06/kXNfXEGBICWYhTYflcuyzRtdrulfjYDM.png',
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      style={{ height: "150px" }}
      autoplay={{
        delay: 1000,
      }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <Image 
            src={item}
            width="100%"
            height="80px"
            layout="responsive"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
