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
        <a href={props.firstCard?.url} rel="noreferrer" target="_blank">
          <div className="w-full h-[400px] md:h-[547px] overflow-hidden rounded-3xl">
            <img
              src={props.firstCard?.multimedia[0]?.url}
              alt={props.firstCard?.title}
              className={`object-cover ${zoomInImage} h-full w-full`}
            />
          </div>

          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

          <div className="absolute top-28 sm:top-40 md:top-60 mx-4 text-white">
            <h1
              className={`text-2xl md:text-3xl font-bold my-4 ${toggleClassCheck}`}
            >
              {props.firstCard?.title}
            </h1>

            <p className="md:text-xl my-4">{props.firstCard?.abstract}</p>

            <div className="hidden md:flex items-center text-xl font-medium">
              <p className="hover:underline">{props.firstCard?.byline}</p>
              <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
              <p>{moment(props.firstCard?.published_date).format('Do MMMM YYYY')}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
