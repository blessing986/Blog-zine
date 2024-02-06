import TopHighlights from "../components/TopHighlights";
import Footer from "../components/Footer";
import FirstStorylineImageItem from "../components/StorylineImage/FirstStorylineImageItem";
import SecondStorylineImageItem from "../components/StorylineImage/SecondStorylineImageItem";
import ThirdStorylineImageItem from "../components/StorylineImage/ThirdStorylineImageItem";
import CarouselSlide from "../components/CarouselSlide";
import { useEffect, useState } from "react";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function Home() {
  const [availableNews, setAvailableNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const resData = await result.json();
      setAvailableNews(resData.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <section className="mx-4 md:mx-16">
        {/* Storyline section */}

        <div className="grid md:grid-cols-2 gap-10 md:my-10">
          <FirstStorylineImageItem firstCard={availableNews[0]} />

          <div>
            <SecondStorylineImageItem secondCard={availableNews[1]} />
            <div className="grid md:grid-cols-2 gap-10">
              <ThirdStorylineImageItem thirdCard={availableNews[2]} />
              <ThirdStorylineImageItem thirdCard={availableNews[3]} />
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
