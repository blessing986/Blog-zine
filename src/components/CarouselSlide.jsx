import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { DUMMY_DATA } from "../Data";
import CarouselItem from "./CarouselItem";

export default function CarouselSlide() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="mt-16">
        <h1 className="text-3xl md:text-5xl font-medium mb-10">
          Sponsored news
        </h1>
      </div>
      <Carousel responsive={responsive}>
        <CarouselItem slider={DUMMY_DATA[19]} />
        <CarouselItem slider={DUMMY_DATA[20]} />
        <CarouselItem slider={DUMMY_DATA[21]} />
        <CarouselItem slider={DUMMY_DATA[22]} />
        <CarouselItem slider={DUMMY_DATA[23]} />
        <CarouselItem slider={DUMMY_DATA[24]} />
        <CarouselItem slider={DUMMY_DATA[25]} />
        <CarouselItem slider={DUMMY_DATA[26]} />
      </Carousel>
    </>
  );
}
