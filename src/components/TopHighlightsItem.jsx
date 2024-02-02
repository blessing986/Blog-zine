export default function TopHighlightsItem({ title, image, abstract, url }) {
  return (
    <>
      <div>
        <a href={url} rel="noreferrer" target="_blank">
          <img
            src={image[0].url}
            alt={title}
            className="w-full h-72 md:h-96 rounded-3xl object-cover"
          />
          <h1 className="text-xl md:text-3xl font-medium mt-6">{title}</h1>
          <p className="text-slate-500 md:text-2xl mt-2 mb-8 md:mb-16">
            {abstract}
          </p>
        </a>
      </div>
    </>
  );
}
