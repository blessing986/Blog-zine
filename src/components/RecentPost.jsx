import moment from "moment";
import { useState } from "react";

export default function RecentPost({ image, title, url, date }) {
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
        className="flex mb-8 cursor-pointer "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          src={image}
          alt={title}
          className="h-20 md:h-24 w-28 object-cover rounded-lg"
        />
        <div className="ml-6">
          <a href={url} rel="noreferrer" target="_blank">
            <h1
              className={`text-base lg:text-2xl font-medium mb-2 md:mb-3 ${toggleClassCheck}`}
            >
              {title}
            </h1>
          </a>
          <span className="text-slate-500 text-sm md:text-xl">{moment(date).format('Do MMMM YYYY')}</span>
        </div>
      </div>
    </>
  );
}
