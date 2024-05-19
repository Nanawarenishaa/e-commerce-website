import React, { useRef } from 'react';
import Button from './Button';
import Slider from 'react-slick';
import { BiSolidLeftArrowSquare } from "react-icons/bi";
import { BiSolidRightArrowSquare } from "react-icons/bi";

const ElectronicCards = () => {
  const sliderRef = useRef(null);

  const products = [
    {
      name: "Computers",
      price: 100,
      image: "./images/computer-img.png",
      description: "See More"
    },
    {
      name: "Laptop",
      price: 100,
      image: "./images/laptop-img.png",
      description: "See More"
    },
    {
      name: "Mobile",
      price: 100,
      image: "./images/mobile-img.png",
      description: "See More"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-4 bg-slate-100 justify-center">
      <h2 className=" text-4xl md:text-5xl text-black font-bold mb-10 text-center">Electronic</h2>
      <div className="w-[95%]  md:w-[80%]  lg:w-[90%]h-[80vh] gap-8 pb-8 px-8 card-container relative">
        <Slider {...settings} ref={sliderRef}>
          {products.map((product, index) => (
            <div className="h-full  flex gap-4 p-4" key={index}>
              <div className="h-full flex flex-col items-center gap-6 p-4 shadow-lg  bg-white">
                <h2 className="text-2xl text-center font-sans font-bold text-neutral-900">{product.name}</h2>
                <span className="text-center font-bold">
                  <span className="text-orange-400 font-bold">Price:</span> ${product.price.toFixed(2)}
                </span>
                <img src={product.image} alt={product.name} className="mx-auto" />
                <div className="flex gap-4 items-center">
                  <Button text="Buy Now" className="py-1 px-4 rounded-sm bg-cyan-900 text-white" />
                  <p className="font-semibold">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex gap-8 mt-2 w-fit mx-auto ">

        <button className="  text-6xl" onClick={goToPrevSlide}><BiSolidLeftArrowSquare /></button>
        <button className="  text-6xl" onClick={goToNextSlide}><BiSolidRightArrowSquare /></button>
      </div>

        </div>
    </div>
  );
};

export default ElectronicCards;
