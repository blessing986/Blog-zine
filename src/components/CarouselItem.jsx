export default function CarouselItem({ title, image, url, date }) {
  return (
    <>
      <a href={url} rel="noreferrer" target="_blank">
        <div className="px-0.5 md:pr-10">
          <img
            src={image[0].url}
            alt={title}
            className="h-80 w-full object-cover rounded-2xl"
          />
        </div>
        <h1 className="text-xl md:text-3xl font-medium mt-6 md:pr-8">
          {title}
        </h1>
        <p className="mt-6 text-lg font-medium">{date}</p>
      </a>
    </>
  );
}
