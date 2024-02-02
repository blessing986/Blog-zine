import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { DUMMY_DATA } from "../Data";
import CarouselItem from "./CarouselItem";
import { useEffect, useState } from "react";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function CarouselSlide() {
  const [availableNews, setAvailableNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const resData = await result.json();
      console.log(resData.results[0]);
      setAvailableNews(resData.results);
    };
    fetchData();
  }, []);

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

  const CarouselSection = availableNews.map((carousel) => (
    <CarouselItem
      key={carousel.title}
      title={carousel.title}
      image={carousel.multimedia}
      url={carousel.url}
      date={carousel.published_date}
    />
  ));

  return (
    <>
      <div className="mt-16">
        <h1 className="text-3xl md:text-5xl font-medium mb-10">
          Sponsored news
        </h1>
      </div>
      <Carousel responsive={responsive}>{CarouselSection}</Carousel>
    </>
  );
}
