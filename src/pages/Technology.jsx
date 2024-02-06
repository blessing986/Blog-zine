import { useEffect, useState } from "react";
import PagesItem from "./PagesItem";
import Footer from "../components/Footer";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function Technology() {
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

  const TechnologySection = availableNews.map((technology) => (
    <PagesItem
      key={technology.title}
      title={technology.title}
      image={technology.multimedia}
      abstract={technology.abstract}
      url={technology.url}
      byline={technology.byline}
      date={technology.published_date}
    />
  ));

  return (
    <>
      <h1 className="text-3xl md:text-6xl font-medium text-center my-10">
        Technology
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20">
        {TechnologySection}
      </div>
      <Footer />
    </>
  );
}
