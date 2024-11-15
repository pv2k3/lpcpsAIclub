import React, {
  useState,
  useEffect
} from 'react'

import img1 from "../img/bgai1.jpeg"
import img2 from "../img/bgai2.jpeg"
import img3 from "../img/bgai3.jpeg"
import img4 from "../img/bgai4.jpeg"
import img5 from "../img/bgai5.jpeg"
import Navbar from './Navbar'

const slides = [
  img1,
  img2,
  img3,
  img4,
  img5
];


function CarouselButton(props) {
  return (
    <button type="button" className={`absolute top-0 ${props.pos}-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`} data-carousel-next onClick={props.onClick} >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={props.dir === "right" ? ("m1 9 4-4-4-4") : ("M5 1 1 5l4 4")} />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  )
}


function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slide = (value) => {
    let elem = document.getElementsByClassName("sliderWrapper")[0].clientWidth;
    const imgElems = document.getElementsByClassName("sliderWrapper-img");
    for (let i = 0; i < slides.length; i++) {
      imgElems[i].style.transform = `translateX(-${((value + 1) % slides.length) * elem}px)`;
    }
  }

  const handlePrev = () => {
    setTimeout(() => {
      setCurrentIndex(() => (currentIndex - 1) % slides.length);
      slide(currentIndex)
    }, 200);
  };

  const handleNext = () => {
    setTimeout(() => {
      setCurrentIndex(() => (currentIndex + 1) % slides.length);
      slide(currentIndex)
    }, 200);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2500);
    return () => clearInterval(intervalId);
  })

  return (
    <>
    <Navbar />
      <div id="indicators-carousel" className="relative w-full h-[70dvh] mt-5" data-carousel="static">
        <div className="sliderWrapper">
          <div className="box-content w-full flex h-[70dvh] overflow-hidden ">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`set-trans h-[70dvh] flex-shrink-0 sliderWrapper-img translate-x-0 w-full`}
                data-carousel-item
              >
                <img src={slide} className="w-full flex justify-center items-center translate-x-0 h-full overflow-hidden text-white relative brightness-[25%]" alt={index} />
              </div>
            ))}
          </div>
        </div>
        <CarouselButton onClick={handlePrev} dir={"left"} pos="start" />
        <CarouselButton onClick={handleNext} dir={"right"} pos="end" />
      </div>
    </>
  );
};

export default Carousel;


