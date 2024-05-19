import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRef } from "react";
const HeroSection = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true, // Enable default arrows
  };
 
  const PrevSlide = () => {
    if(sliderRef.current){
     sliderRef.current.slickPrev()
    }
  };
  
 
  const NextSlide = () => {
    if(sliderRef.current){
     sliderRef.current.slickNext()
    }
  };
  

  return (
    <div className="w-full h-[90vh] pt-20 bg-slate-200 bg-[url('/images/banner-bg.png')] bg-center bg-cover bg-no-repeat">
      <h1 className="font-bold text-5xl text-white text-center">Eflyer</h1>
      <Slider {...settings} ref={sliderRef} >
        <section className="w-full h-screen relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="font-bold text-4xl lg:text-6xl text-white mb-20">
              GET START <br /> YOUR FAVORITE SHOPPING
            </h2>
            <div className="mx-auto mb-20">
              <Button text="BUY NOW" className="text-2xl py-2 px-10 font-semibold" />
            </div>
          </div>
        </section>
        <section className="w-full h-screen relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="font-bold  text-4xl lg:text-6xl text-white mb-20">
              GET START <br /> YOUR FAVORITE SHOPPING
            </h2>
            <div className="mx-auto mb-20">
              <Button text="BUY NOW" className="text-2xl py-2 px-10 font-semibold" />
            </div>
          </div>
        </section>
        
      </Slider>
      <div className="flex gap-8    ">

<button className=" text-5xl md:text-6xl absolute top-1/2 left-10  md:left-32 lg:left-40  text-slate-100 z-10" onClick={PrevSlide}><IoIosArrowDropleftCircle /></button>
<button className="  text-5xl md:text-6xl absolute top-1/2 right-10  md:right-32 lg:right-40  z-10  text-slate-100 " onClick={NextSlide}><IoIosArrowDroprightCircle /></button>
</div>
    </div>
  );
};

export default HeroSection;

