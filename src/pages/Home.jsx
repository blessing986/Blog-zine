import TopHighlights from "../components/TopHighlights";
import Footer from "../components/Footer";
import FirstStorylineImageItem from "../components/StorylineImage/FirstStorylineImageItem";
import SecondStorylineImageItem from "../components/StorylineImage/SecondStorylineImageItem";
import ThirdStorylineImageItem from "../components/StorylineImage/ThirdStorylineImageItem";
import CarouselSlide from "../components/CarouselSlide";
import { useEffect, useState } from "react";
import "../index";
import Error from "../components/Error";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function Home() {
  const [availableNews, setAvailableNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const resData = await result.json();

        if (!result.ok) {
          throw new Error("Failed to fetch post");
        }
        setAvailableNews(resData.results);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch post, please try again later.",
        });
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (error) return <Error title="An error occured!" message={error.message} />;

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center ">
        <svg
          className="w-20 h-20 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
        </svg>
      </div>
    );

  return (
    <>
      <section className="mx-4 md:mx-6">
        {/* Storyline section */}

        <div className="grid lg:grid-cols-2 gap-5">
          <FirstStorylineImageItem firstCard={availableNews[0]} />

          <div>
            <SecondStorylineImageItem secondCard={availableNews[1]} />
            <div className="grid md:grid-cols-2 gap-5">
              <ThirdStorylineImageItem thirdCard={availableNews[2]} />
              <ThirdStorylineImageItem thirdCard={availableNews[5]} />
            </div>
          </div>
        </div>

        <TopHighlights />

        <div className="mb-20 bg-sky-100 h-0.5"></div>

        <CarouselSlide />
      </section>

      <Footer />
    </>
  );
}
