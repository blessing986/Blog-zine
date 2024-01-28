import { useState } from "react";

export default function TrendingTopics(props) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover((hover) => !hover);
  }

  function handleMouseOut() {
    setHover((hover) => !hover);
  }

  let toggleClassCheck = hover ? "underline underline-offset-8" : "";
  
  return (
    <>
      <div
        className="relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="flex items-center justify-center h-16 md:h-24 w-full overflow-hidden rounded-md mb-6 md:mb-10 cursor-pointer">
          <img
            src={props.trend.image.src}
            alt={props.trend.image.alt}
            className="object-cover mb-8 hover:scale-110 transition duration-500"
          />
          <p className={`absolute text-xl md:text-3xl font-bold text-white ${toggleClassCheck}`}>
            {props.trend.title}
          </p>
        </div>
      </div>
    </>
  );
}
