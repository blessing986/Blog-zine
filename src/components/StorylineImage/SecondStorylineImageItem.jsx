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

  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <a href={props.secondCard.url} rel="noreferrer" target="_blank">
        <div className="w-full h-96 overflow-hidden rounded-3xl mb-10">
          <img
            src={props.secondCard.multimedia[0].url}
            alt={props.secondCard.title}
            className="object-cover hover:scale-110 transition duration-500 w-full h-full"
          />
        </div>

        <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
          <h1
            className={`text-white text-2xl md:text-4xl font-bold my-4 ${toggleClassCheck}`}
          >
            {props.secondCard.title}
          </h1>

          <div className="hidden md:flex items-center text-white text-2xl font-medium">
            <p className="hover:underline">{props.secondCard.byline}</p>
            <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
            <p>{props.secondCard.published_date}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
