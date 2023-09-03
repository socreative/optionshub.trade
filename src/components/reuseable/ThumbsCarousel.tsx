import Image from 'next/image';
import { FC, useState } from 'react';
import Swiper, { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper as SwiperCarousel, SwiperSlide } from 'swiper/react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';

const ThumbsCarousel: FC = () => {
  useLightBox();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  const slideImages = [
    { id: 1, url: '/img/photos/shs1.jpg', fullImage: '/img/photos/shs1@2x.jpg' },
    { id: 2, url: '/img/photos/shs2.jpg', fullImage: '/img/photos/shs2@2x.jpg' },
    { id: 3, url: '/img/photos/shs3.jpg', fullImage: '/img/photos/shs3@2x.jpg' },
    { id: 4, url: '/img/photos/shs4.jpg', fullImage: '/img/photos/shs4@2x.jpg' }
  ];

  const thumbImages = [
    { id: 1, url: '/img/photos/shs1-th.jpg' },
    { id: 2, url: '/img/photos/shs2-th.jpg' },
    { id: 3, url: '/img/photos/shs3-th.jpg' },
    { id: 4, url: '/img/photos/shs4-th.jpg' }
  ];

  return (
    <div className="swiper-container swiper-thumbs-container">
      <SwiperCarousel
        spaceBetween={10}
        pagination={false}
        navigation={{ prevEl, nextEl }}
        modules={[FreeMode, Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      >
        {slideImages.map(({ url, id, fullImage }) => (
          <SwiperSlide key={id}>
            <figure className="rounded">
              <Image width={610} height={655} src={url} alt="product" style={{ width: '100%', height: 'auto' }} />
              <a className="item-link" href={fullImage} data-glightbox data-gallery="product-group">
                <i className="uil uil-focus-add" />
              </a>
            </figure>
          </SwiperSlide>
        ))}
      </SwiperCarousel>

      {/* custom navigation */}
      <div className="swiper-controls">
        <div className="swiper-navigation">
          <div role="button" ref={(node) => setPrevEl(node)} className="swiper-button swiper-button-prev" />
          <div role="button" ref={(node) => setNextEl(node)} className="swiper-button swiper-button-next" />
        </div>
      </div>

      <SwiperCarousel
        freeMode
        threshold={2}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {thumbImages.map(({ url, id }) => (
          <SwiperSlide key={id}>
            <Image width={114} height={120} src={url} alt="product" style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}
      </SwiperCarousel>
    </div>
  );
};

export default ThumbsCarousel;
