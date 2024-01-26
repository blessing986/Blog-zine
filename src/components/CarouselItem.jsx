export default function CarouselItem({ image, category, title, color }) {
  return (
    <>
      <div className="relative">
        <img
          src={image.src}
          alt={image.alt}
          className="h-80 w-[400px] object-cover rounded-2xl"
        />
        <div>
          <p
            className={`absolute top-56 md:top-64 flex items-center ${color} w-32 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white ml-6 md:ml-8`}
          >
            <span className="w-4 h-4 bg-white rounded-full mx-2"></span>
            {category}
          </p>
        </div>
        <h1 className="text-xl md:text-3xl font-medium mt-6">{title}</h1>
      </div>
    </>
  );
}
