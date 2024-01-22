import {
  RECENT_POST_DETAILS,
  TOP_HIGHLIGHTS_DETAILS,
  TRENDING_TOPICS_DETAILS,
} from "../Data";
import RecentPost from "./RecentPost";
import TopHighlightsItem from "./TopHighlightsItem";
import TrendingTopics from "./TrendingTopics";

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

  const TrendingTopicsList = TRENDING_TOPICS_DETAILS.map((trending) => (
    <TrendingTopics
      id={trending.id}
      key={trending.id}
      image={trending.image}
      title={trending.title}
    />
  ));

  const RecentPostList = RECENT_POST_DETAILS.map((recent) => (
    <RecentPost
      id={recent.id}
      key={recent.id}
      image={recent.image}
      title={recent.title}
      date={recent.date}
    />
  ));

  return (
    <>
      <div className="mt-16">
        <h1 className="text-3xl md:text-5xl font-medium">
          Today's top highlights
        </h1>
        <p className="text-slate-500 text-lg md:text-2xl mt-2 mb-10 md:mb-16">
          Latest breaking news, pictures, videos, and special reports
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[70%]">
          <div className="grid md:grid-cols-2 gap-12">{TopHighlightsList}</div>

          <div className="flex justify-center items-center mt-16 md:mt-8 mb-10">
            <button className="flex items-center justify-center bg-sky-100 text-sky-700 px-4 py-2 md:px-6 md:py-4 text-lg md:text-2xl font-bold rounded-lg hover:text-white hover:bg-sky-700">
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

        <div className="md:w-[30%] md:ml-16 md:mr-20">
          <div>
            <h1 className="text-2xl md:text-4xl font-medium mb-8">
              Trending Topics
            </h1>

            <div>{TrendingTopicsList}</div>

            <p className="underline underline-offset-8 text-center text-gray-500 hover:text-blue-500 cursor-pointer text-md md:text-2xl font-bold">
              View all categories
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl md:text-4xl font-medium mb-8">
              Recent Post
            </h1>
            <div>{RecentPostList}</div>
          </div>
        </div>
      </div>
    </>
  );
}
