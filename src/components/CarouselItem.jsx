export default function CarouselItem(props) {
  return (
    <>
      <div className="relative">
        <img
          src={props.slider.image.src}
          alt={props.slider.image.alt}
          className="h-80 w-[400px] object-cover rounded-2xl"
        />
        <div>
          <p
            className={`absolute top-56 md:top-64 flex items-center ${props.slider.color} w-32 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white ml-6 md:ml-8`}
          >
            <span className="w-4 h-4 bg-white rounded-full mx-2"></span>
            {props.slider.category}
          </p>
        </div>
        <h1 className="text-xl md:text-3xl font-medium mt-6 md:pr-8">{props.slider.title}</h1>
      </div>
    </>
  );
}
