import { useEffect, useState } from "react";
import PagesItem from "./PagesItem";
import Footer from "../components/Footer";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function Politics() {
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

  const PoliticsSection = availableNews.map((Politics) => (
    <PagesItem
      key={Politics.title}
      title={Politics.title}
      image={Politics.multimedia}
      abstract={Politics.abstract}
      url={Politics.url}
      byline={Politics.byline}
      date={Politics.published_date}
    />
  ));
  return (
    <>
     <h1 className="text-3xl md:text-5xl font-medium text-center my-10">
        Politics
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {PoliticsSection}
      </div>
      <Footer />
    </>
  );
}
