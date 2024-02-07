export default function TopHighlightsItem({ title, image, abstract, url }) {
  return (
    <>
      <div>
        <a href={url} rel="noreferrer" target="_blank">
          <img
            src={image[0].url}
            alt={title}
            className="w-full h-72 rounded-3xl object-cover"
          />
          <h1 className="text-xl md:text-2xl font-medium mt-6">{title}</h1>
          <p className="text-slate-500 md:text-xl mt-2 mb-8 ">{abstract}</p>
        </a>
      </div>
    </>
  );
}
