import moment from "moment";
import { useState } from "react";

export default function SecondStorylineImageItem(props) {
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
      <a href={props.secondCard?.url} rel="noreferrer" target="_blank">
        <div className="w-full h-96 md:h-72 lg:h-60 overflow-hidden rounded-3xl mb-5">
          <img
            src={props.secondCard?.multimedia[0]?.url}
            alt={props.secondCard?.title}
            className={`object-cover ${zoomInImage} h-full w-full`}
          />
        </div>

        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

        <div className="absolute top-56 md:top-28 lg:top-20 mx-4 text-white">
          <h1 className={`text-2xl font-bold my-4 ${toggleClassCheck}`}>
            {props.secondCard?.title}
          </h1>

          <div className="hidden md:flex items-center text-xl font-medium">
            <p className="hover:underline">{props.secondCard?.byline}</p>
            <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
            <p>
              {moment(props.secondCard?.published_date).format("Do MMMM YYYY")}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
