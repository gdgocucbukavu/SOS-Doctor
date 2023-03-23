import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import img1 from "./assets/e.jpg";
import img2 from "./assets/PXL_20230128_122548192.jpg";
import img3 from "./assets/PXL_20230128_131948658.PORTRAIT.jpg";
import img4 from "./assets/PXL_20230204_123722959.jpg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/autoplay";
import styled from "styled-components";

const captions = [
  "Caption 1",
  "Caption 2",
  "Caption 3",
  "Caption 3",
  "Caption 3",
];

const data = [
  {
    id: 1,
    img: img1,
    description: "La rencontre des étudiants du club GDSC UCB",
  },
  {
    id: 2,
    img: img2,
    description: "La rencontre des étudiants du club GDSC UCB",
  },
  {
    id: 3,
    img: img3,
    description: "La rencontre des étudiants du club GDSC UCB",
  },
  {
    id: 4,
    img: img4,
    description: "Ensemble pour l'innovation de notre pays",
  },
];

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
        modules={[Navigation, Pagination, A11y, Autoplay]}
        allowSlideNext
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((carte, index) => (
          <SwiperSlide key={index}>
            <CardRender className="slide">
              <img
                src={carte.img}
                alt={`Slide ${index}`}
                className="img_carte"
              />
              <div className="caption">
                <p>{carte.description}</p>
              </div>
            </CardRender>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

const CardRender = styled.div`
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 15px;
  }
  .caption {
    position: absolute;
    width: 100%;
    height: 60px;
    background: linear-gradient(360deg, #0007, #0007);
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
  }
`;
