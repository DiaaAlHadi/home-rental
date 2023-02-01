import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import property from '../accesst/images/property.jpg'
import rightCarousel from '../accesst/images/carousel-right.png'
import leftCarousel from '../accesst/images/carousel-left.png'
import Property from "./Property";


    export default function Carouselproperty(){

    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      adaptiveHeight: true,
      slidesPerRow: 1,
      nextArrow: (
        <div>
          <div className="next-slick-arrow"> <img src={rightCarousel} alt="go right show"/> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> <img src={leftCarousel} alt="go right show"/></div>
        </div>
      ),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="overflow-hidden">
        <Slider {...settings}>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img={property}
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property minheight="17rem" height="553px" img={property}name="Baghdad" tagshow="none" overview="none"/>
          </div>
          
        </Slider>
      </div>
    );

}
