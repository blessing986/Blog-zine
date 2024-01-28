export default function TopHighlightsItem(props) {
  return (
    <>
      <div className="relative">
        <img
          src={props.highlight.image.src}
          alt={props.highlight.image.alt}
          className="w-full h-72 md:h-96 rounded-3xl object-cover"
        />

        <div>
          <p
            className={`absolute top-56 md:top-72 flex items-center ${props.highlight.color} w-32 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white ml-6 md:ml-8`}
          >
            <span className="w-4 h-4 bg-white rounded-full mx-2"></span>
            {props.highlight.category}
          </p>
        </div>
        <h1 className="text-xl md:text-3xl font-medium mt-6">{props.highlight.title}</h1>
        <p className="text-slate-500 md:text-2xl mt-2 mb-8 md:mb-16">{props.highlight.description}</p>
      </div>
    </>
  );
}
