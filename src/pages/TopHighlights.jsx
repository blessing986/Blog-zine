import { TOP_HIGHLIGHTS_DETAILS } from "../Data";
import TopHighlightsItem from "./TopHighlightsItem";

export default function TopHighlights() {
  const TopHighlightsList = TOP_HIGHLIGHTS_DETAILS.map((highlights) => (
    <TopHighlightsItem
      id={highlights.id}
      key={highlights.id}
      image={highlights.image}
      category={highlights.category}
      title={highlights.title}
      description={highlights.description}
      color={highlights.color}
    />
  ));

  return (
    <>
      <div className="mx-4 md:mx-16 mt-16">
        <h1 className="text-3xl md:text-5xl font-medium">
          Today's top highlights
        </h1>
        <p className="text-slate-500 text-lg md:text-2xl mt-2 mb-10 md:mb-16">
          Latest breaking news, pictures, videos, and special reports
        </p>
      </div>
      <div class="grid md:grid-cols-2 md:w-3/4">{TopHighlightsList}</div>

      <button>Load more post</button>
    </>
  );
}
