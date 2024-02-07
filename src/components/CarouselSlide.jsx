import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      setAvailableNews(resData.results);
    };
    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 991 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 991, min: 767 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 575 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };

  const CarouselSection = availableNews.map((carousel) => (
    <CarouselItem
      key={carousel.title}
      title={carousel.title}
      image={carousel.multimedia}
      url={carousel.url}
      byline={carousel.byline}
      date={carousel.published_date}
    />
  ));

  return (
    <>
      <div className="mt-16">
        <h1 className="text-3xl md:text-4xl font-medium mb-10">
          Sponsored news
        </h1>
      </div>
      <Carousel responsive={responsive}>{CarouselSection}</Carousel>
    </>
  );
}
