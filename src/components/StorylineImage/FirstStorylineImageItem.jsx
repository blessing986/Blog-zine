import moment from "moment";
import { useState } from "react";

export default function FirstStorylineImageItem(props) {
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
    <>
      <div
        className="relative cursor-pointer"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a href={props.firstCard.url} rel="noreferrer" target="_blank">
          <div className="w-full h-[400px] md:h-[808px] overflow-hidden rounded-3xl">
            <img
              src={props.firstCard.multimedia[0].url}
              alt={props.firstCard.title}
              className={`object-cover ${zoomInImage} h-full w-full`}
            />
          </div>

          <div class="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="absolute top-40 md:top-1/2 ml-6 md:ml-10 text-white">
            <h1
              className={`text-2xl md:text-6xl font-bold my-4 ${toggleClassCheck}`}
            >
              {props.firstCard.title}
            </h1>

            <p className="md:text-2xl my-4">{props.firstCard.abstract}</p>

            <div className="hidden md:flex items-center text-2xl font-medium">
              <p className="hover:underline">{props.firstCard.byline}</p>
              <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
              <p>{moment(props.firstCard.published_date).format('Do MMMM YYYY')}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
