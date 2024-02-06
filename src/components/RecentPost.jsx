import { useState } from "react";

export default function RecentPost(props) {
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
          src={props?.recentPost?.multimedia[0]?.url}
          alt={props?.recentPost?.title}
          className="h-20 md:h-24 w-28 object-cover rounded-lg"
        />
        <div className="ml-6">
          <a href={props?.recentPost?.url} rel="noreferrer" target="_blank">
            <h1
              className={`text-base md:text-2xl font-medium mb-2 md:mb-3 ${toggleClassCheck}`}
            >
              {props?.recentPost?.title}
            </h1>
          </a>
          <span className="text-slate-500 text-sm md:text-xl">
            {props?.recentPost?.published_date}
          </span>
        </div>
      </div>
    </>
  );
}
