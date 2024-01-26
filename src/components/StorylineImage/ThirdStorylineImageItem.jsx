import { useState } from "react";

export default function ThirdStorylineImageItem({
  image,
  category,
  title,
  color,
}) {
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
      <div className="w-full h-96 overflow-hidden rounded-3xl">
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover hover:scale-110 transition duration-500"
        />
      </div>
      <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
        <p
          className={`flex items-center ${color} w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white`}
        >
          <p className="w-4 h-4 bg-white rounded-full mx-2"></p>
          {category}
        </p>

        <h1
          className={`text-white text-2xl md:text-4xl font-bold my-4 ${toggleClassCheck}`}
        >
          {title}
        </h1>

        <div className="hidden md:flex items-center text-white text-2xl font-medium">
          <p>
            by <span className="hover:underline">Zero</span>{" "}
          </p>
          <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
          <p>Jan 16,2024</p>
        </div>
      </div>
    </div>
  );
}
