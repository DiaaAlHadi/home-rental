import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
          <div className="next-slick-arrow"> <img src="carousel-right.png" alt="go right show"/> </div>
        </div>
      ),
      prevArrow: (
        <div>
          <div className="prev-slick-arrow"> <img src="images/carousel-left.png" alt="go right show"/></div>
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
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property 
              minheight="17rem" 
              height="auto" 
              img="url(images/property.jpg)" 
              name="Baghdad" 
              tagshow="none" 
              overview="none"
            />
          </div>
          <div>
            <Property minheight="17rem" height="553px" img="url(images/property.jpg)" name="Baghdad" tagshow="none" overview="none"/>
          </div>
          
        </Slider>
      </div>
    );

}
