'use client'
import Slider from 'react-slick';
import React, { ReactNode, forwardRef } from 'react';

interface Props {
  children: ReactNode;
  settings: {};
  style?:string;
}

const Carousel = forwardRef<Slider, Props>(
  ({ children, settings, style }, ref) => {
    return (
      <div className={`slider-container ${style}`}>
        <Slider ref={ref} {...settings}>
          {children}
        </Slider>
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

export default Carousel;