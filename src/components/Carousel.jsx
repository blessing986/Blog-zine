import img1 from "../assets/food1.jpg"
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";

import { CAROUSEL_DETAILS } from "../Data";
import CarouselItem from "./CarouselItem";

export default function Carousel() {
  const CarouselList = CAROUSEL_DETAILS.map((carousel) => (
    <CarouselItem id={carousel.id} key={carousel.id} image={carousel.image} />
  ));

  return (
    <>
      <div className="mt-16">
        <h1 className="text-3xl md:text-5xl font-medium">Sponsored news</h1>
      </div>
      <div className="flex overflow-x-auto no-scrollbar">{CarouselList}</div>
      {/* <div className="flex overflow-x-auto no-scrollbar">
        <img src={img1} alt="1" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img2} alt="2" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img3} alt="3" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20"/>
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20"/>
        
      </div> */}
    </>
  );
}
