import { useEffect, useState } from "react";
import RecentPost from "./RecentPost";
import TopHighlightsItem from "./TopHighlightsItem";
import TrendingTopics from "./TrendingTopics";
import { CONSTANTS } from "../constant";

const world_URL = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${CONSTANTS.nytApiKey}`;

const home_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${CONSTANTS.nytApiKey}`;

export default function TopHighlights() {
  const [availableWorldNews, setAvailableWorldNews] = useState([]);
  const [availableHomeNews, setAvailableHomeNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result1 = await fetch(world_URL);
        const resData1 = await result1.json();
        setAvailableWorldNews(resData1.results);

        const result2 = await fetch(home_URL);
        const resData2 = await result2.json();
        setAvailableHomeNews(resData2.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const TopHighlights = availableWorldNews.map((highlight) => (
    <TopHighlightsItem
      key={highlight.title}
      title={highlight.title}
      image={highlight.multimedia}
      abstract={highlight.abstract}
      url={highlight.url}
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
          <div className="grid md:grid-cols-2 gap-12">{TopHighlights}</div>

          <div className="flex justify-center items-center mt-16 md:mt-8 mb-10">
            <button className="flex items-center justify-center bg-sky-100 text-sky-700 px-4 py-2 md:px-6 md:py-4 text-lg md:text-2xl font-bold rounded-lg hover:text-white hover:bg-sky-700">
              Load more post{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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

            <div>
              <TrendingTopics
                image={availableHomeNews[5]?.multimedia[0]?.url}
                section={availableHomeNews[5]?.section}
                url={availableHomeNews[5]?.url}
              />

              <TrendingTopics
                image={availableHomeNews[6]?.multimedia[0]?.url}
                section={availableHomeNews[6]?.section}
                url={availableHomeNews[6]?.url}
              />

              <TrendingTopics
                image={availableHomeNews[7]?.multimedia[0]?.url}
                section={availableHomeNews[7]?.section}
                url={availableHomeNews[7]?.url}
              />

              <TrendingTopics
                image={availableHomeNews[8]?.multimedia[0]?.url}
                section={availableHomeNews[8]?.section}
                url={availableHomeNews[8]?.url}
              />

              <TrendingTopics
                image={availableHomeNews[9]?.multimedia[0]?.url}
                section={availableHomeNews[9]?.section}
                url={availableHomeNews[9]?.url}
              />
            </div>

            <p className="underline underline-offset-8 text-center text-gray-500 hover:text-blue-500 cursor-pointer text-md md:text-2xl font-bold">
              View all categories
            </p>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl md:text-4xl font-medium mb-8">
              Recent Post
            </h1>
            <div>
              <RecentPost recentPost={availableWorldNews[8]} />
              <RecentPost recentPost={availableWorldNews[9]} />
              <RecentPost recentPost={availableWorldNews[10]} />
              <RecentPost recentPost={availableWorldNews[11]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
