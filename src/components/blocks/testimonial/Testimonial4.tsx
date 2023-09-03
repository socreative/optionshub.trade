import { FC } from 'react';
// -------- custom component -------- //
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
// -------- data -------- //
import { testimonialList2 } from 'data/testimonial-list';

const Testimonial4: FC = () => {
  return (
    <div className="wrapper bg-light">
      <div className="container py-14 py-md-16">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">Happy Customers</h2>
            <h3 className="display-4 mb-6 px-xl-10 px-xxl-15">
              Dont take our word for it. See what customers are saying about us.
            </h3>
          </div>
        </div>

        <div className="swiper-container dots-closer mb-6">
          <Carousel spaceBetween={0} grabCursor navigation={false} breakpoints={carouselBreakpoints}>
            {testimonialList2.map((item, i) => (
              <div className="item-inner" key={i}>
                <TestimonialCard3 {...item} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial4;
