import React, { Component } from "react";
import Black from "../../assets/img/back_adam.jpg"
import Mamun from "../../assets/img/mamun.jpg"

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section>
      <div className="container h-100">
      <Slider {...settings}>
      <div>
        <h3><img src={Black} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Mamun} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Black} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Mamun} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Black} alt="" /></h3>
      </div>
      <div>
        <h3><img src={Mamun} alt="" /></h3>
      </div>
    </Slider>
      </div>
    </section>
    
  );
}