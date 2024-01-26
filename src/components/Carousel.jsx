import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CAROUSEL_DETAILS } from "../Data";
import CarouselItem from "./CarouselItem";

export default function Carouselbar() {
  const CarouselList = CAROUSEL_DETAILS.map((carousel) => (
    <CarouselItem id={carousel.id}
    key={carousel.id}
    image={carousel.image}
    category={carousel.category}
    title={carousel.title}
    color={carousel.color} />
  ));

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
      <Carousel responsive={responsive}>{CarouselList}</Carousel>
    </>
  );
}
