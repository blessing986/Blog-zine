import { useState } from "react";

export default function TrendingTopics({ image, section, url }) {
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
        className="relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a href={url} rel="noreferrer" target="_blank">
          <div className="flex items-center justify-center h-16 md:h-24 w-full overflow-hidden rounded-md mb-6 md:mb-10 cursor-pointer">
            <img
              src={image}
              alt={section}
              className={`object-cover ${zoomInImage} h-full w-full`}
            />
            <div class="absolute inset-0 bg-black opacity-50 rounded-md"></div>
            <p
              className={`absolute text-xl md:text-3xl font-bold text-white ${toggleClassCheck}`}
            >
              {section}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
