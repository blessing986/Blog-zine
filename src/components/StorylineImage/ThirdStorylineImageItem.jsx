import moment from "moment";
import { useState } from "react";

export default function ThirdStorylineImageItem(props) {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover((hover) => !hover);
  }

  function handleMouseOut() {
    setHover((hover) => !hover);
  }

  let toggleClassCheck = hover ? "underline underline-offset-8" : "";

  let zoomInImage = hover
    ? "transform transition duration-500 scale-125"
    : "transform transition duration-500 scale-100";

  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a href={props.thirdCard.url} rel="noreferrer" target="_blank">
        <div className="w-full h-96 md:h-72 overflow-hidden rounded-3xl">
          <img
            src={props.thirdCard.multimedia[0].url}
            alt={props.thirdCard.title}
            className={`object-cover ${zoomInImage} h-full w-full`}
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

        <div className="absolute top-56 md:top-20 ml-4 md:mx-2">
          <h1
            className={`text-white font-bold text-2xl md:text-xl my-4 ${toggleClassCheck}`}
          >
            {props.thirdCard.title}
          </h1>

          <div className="hidden md:flex flex-col items-center text-white text-lg font-medium">
            <p className="hover:underline">{props.thirdCard.byline}</p>
            <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
            <p>
              {moment(props.thirdCard.published_date).format("Do MMM YYYY")}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
