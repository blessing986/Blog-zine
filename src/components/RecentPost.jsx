import { useState } from "react";

export default function RecentPost({ image, title, date }) {
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
          src={image.src}
          alt={image.alt}
          className="h-24 w-40 object-cover rounded-xl"
        />
        <div className="ml-6">
          <h1 className={`text-2xl font-medium mb-3 ${toggleClassCheck}`}>
            {title}
          </h1>
          <span className="text-slate-500 text-xl">{date}</span>
        </div>
      </div>
    </>
  );
}
