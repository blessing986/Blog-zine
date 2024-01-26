export default function CarouselItem({ image }) {
  return (
    <div className="relative">
      <img
        src={image.src}
        alt={image.alt}
        className="object-cover w-[2000px] h-[700px] mr-20"
      />

      {/* <div>
        <p
          className={`absolute top-56 md:top-72 flex items-center ${color} w-32 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white ml-6 md:ml-8`}
        >
          <span className="w-4 h-4 bg-white rounded-full mx-2"></span>
          {category}
        </p>
      </div>
      <h1 className="text-xl md:text-3xl font-medium mt-6">{title}</h1> */}
    </div>
  );
}
