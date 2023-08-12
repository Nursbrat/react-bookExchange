import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';

import Slider from 'react-slick/lib/slider';

const SubMainPage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>
                <div>hello</div>

            </Slider>
        </div>
    );
}

export default SubMainPage
