import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PagesItem from "./PagesItem";
import Footer from "../components/Footer";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { fetchNews } from "../state/fetchingDataState";

export default function Business() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.fetch.data);
  const loading = useSelector((state) => state.fetch.isLoading);
  const error = useSelector((state) => state.fetch.error);

  useEffect(() => {
    dispatch(fetchNews("business"));
  }, [dispatch]);

  if (error) return <Error />;

  if (loading) return <Loading />;

  const BusinessSection = data?.map((business) => (
    <PagesItem
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
      <h1 className="text-3xl md:text-5xl font-medium text-center my-10">
        Business
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {BusinessSection}
      </div>
      <Footer />
    </>
  );
}
