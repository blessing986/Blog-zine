import { useEffect, useState } from "react";
import BusinessItem from "./PagesItem";
import Footer from "../components/Footer";

const URL =
  "https://api.nytimes.com/svc/topstories/v2/business.json?api-key=YcgpFGOYVpT3Zdkvsv73EcwRTd8qxGP6";

export default function Business() {
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

  const BusinessSection = availableNews.map((business) => (
    <BusinessItem
      key={business.title}
      title={business.title}
      image={business.multimedia}
      abstract={business.abstract}
      url={business.url}
      byline={business.byline}
      date={business.published_date}
    />
  ));

  return (
    <>
      <h1 className="text-3xl md:text-6xl font-medium text-center my-10">
        Business
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-4 md:mx-20">
        {BusinessSection}
      </div>
      <Footer />
    </>
  );
}
