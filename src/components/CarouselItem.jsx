import moment from "moment";

export default function CarouselItem({ title, image, url, byline, date }) {
  return (
    <>
      <a href={url} rel="noreferrer" target="_blank">
        <div className="px-2 md:pr-5">
          <img
            src={image[0].url}
            alt={title}
            className="h-80 md:h-60 w-full object-cover rounded-2xl"
          />
        </div>

        <h1 className="text-lg font-medium mt-6 sm:pr-4 md:pr-8">{title}</h1>

        <p className="mt-6 text-base font-medium">
          {moment(date).format("Do MMMM YYYY")}
        </p>
      </a>
    </>
  );
}
