import { FC, Fragment } from 'react';
// -------- data -------- //
import { accordionList1 } from 'data/faq';
import Accordion from 'components/reuseable/accordion';

const FAQ8: FC = () => {
  return (
    <Fragment>
      <div className="position-relative">
        <img
          data-delay="1800"
          src="/img/svg/doodle7.svg"
          className="h-7 position-absolute d-none d-lg-block"
          style={{ top: '-90%', right: '-3%' }}
          alt=""
        />

        <img
          data-delay="1800"
          src="/img/svg/doodle8.svg"
          className="h-14 position-absolute d-none d-lg-block"
          style={{ top: '-20%', left: '-12%' }}
          alt=""
        />

        <h2 className="fs-16 text-uppercase text-muted mb-3 text-center">FAQ</h2>
        <h3 className="display-3 mb-11 px-lg-8 px-xl-11 text-center">
          If you don't see an <span className="text-gradient gradient-7">answer</span> to your question, you can send us
          an email from our contact form.
        </h3>
      </div>

      <div className="accordion-wrapper" id="accordion">
        <div className="row">
          {accordionList1.map((items, i) => {
            return (
              <div className="col-md-6" key={i}>
                {items.map((item) => (
                  <Accordion key={item.no} type="shadow-lg" {...item} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ8;
