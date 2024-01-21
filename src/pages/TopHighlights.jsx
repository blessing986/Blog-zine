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
      <div className="md:w-3/4">
        <div class="grid md:grid-cols-2">{TopHighlightsList}</div>

        <div className="flex justify-center items-center mb-10">
          <button className="flex items-center justify-center bg-sky-100 text-sky-700 px-6 py-4 text-2xl font-bold rounded-lg">
            Load more post{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
