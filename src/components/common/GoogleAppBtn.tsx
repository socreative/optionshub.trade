import { FC, Fragment } from 'react';
import { slideInDownAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const GoogleAppBtn: FC = () => {
  return (
    <div className="d-flex justify-content-center justify-content-lg-start" style={slideInDownAnimate('900ms')}>
      <span style={slideInDownAnimate('1200ms')}>
        <NextLink
          href="#"
          className="btn btn-primary btn-icon btn-icon-start rounded me-2"
          title={
            <Fragment>
              Learn more
            </Fragment>
          }
        />
      </span>
    </div>
  );
};

export default GoogleAppBtn;
