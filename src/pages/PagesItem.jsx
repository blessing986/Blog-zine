import moment from "moment";

export default function PagesItem({
  title,
  image,
  abstract,
  url,
  date,
  byline,
}) {
  return (
    <>
      <div key={title} className="relative">
        <a href={url} rel="noreferrer" target="_blank">
          <img
            src={image[0].url}
            alt={title}
            className="w-full h-72 md:h-96 rounded-3xl object-cover"
          />
          <h1 className="text-xl md:text-2xl font-medium mt-6">{title}</h1>
          <p className="text-slate-500 md:text-xl mt-2 mb-8 md:mb-16">
            {abstract}
          </p>

          <div className="flex items-center absolute bottom-0 font-medium">
            <p>{byline}</p>
            <p className="ml-20">{moment(date).format('Do MMMM YYYY')}</p>
          </div>
        </a>
      </div>
    </>
  );
}
