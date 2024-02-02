import { useEffect, useState } from "react";
import PagesItem from "./PagesItem";
import Footer from "../components/Footer";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/food.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function Food() {
  const [availableNews, setAvailableNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      const resData = await result.json();
      console.log(resData.results[0]);
      setAvailableNews(resData.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  const FoodSection = availableNews.map((food) => (
    <PagesItem
      key={food.title}
      title={food.title}
      image={food.multimedia}
      abstract={food.abstract}
      url={food.url}
      byline={food.byline}
      date={food.published_date}
    />
  ));

  return (
    <>
      <h1 className="text-3xl md:text-6xl font-medium text-center my-10">
        Food
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20">
        {FoodSection}
      </div>
      <Footer />
    </>
  );
}
