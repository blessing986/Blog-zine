// export default function FirstStorylineImageItem(props) {
//   return (
//     <>
//       <div>{props.firstCard.title}</div>
//       {/* <div>{props.firstCard.multimedia}</div> */}
//       <div>{props.firstCard.multimedia[0].url}</div>

//     </>
//   );
// }

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
              className="object-cover hover:scale-110 transition duration-500 h-full"
            />
          </div>

          <div className="absolute top-40 md:top-1/2 ml-6 md:ml-10 text-white">
            <h1
              className={`text-white text-2xl md:text-6xl font-bold my-4 ${toggleClassCheck}`}
            >
              {props.firstCard.title}
            </h1>

            <p className="text-white md:text-2xl my-4">
              {props.firstCard.abstract}
            </p>

            <div className="hidden md:flex items-center text-white text-2xl font-medium">
              <p className="hover:underline">{props.firstCard.byline}</p>
              <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
              <p>{props.firstCard.published_date}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
