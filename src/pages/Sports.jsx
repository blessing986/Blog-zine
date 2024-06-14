import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import PagesItem from "./PagesItem";
import Footer from "../components/Footer";
import Error from "../components/Error";
import { fetchNews } from "../state/fetchingDataState";
import Loading from "../components/Loading";

export default function Sports() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.fetch.data);
  const loading = useSelector((state) => state.fetch.isLoading);
  const error = useSelector((state) => state.fetch.error);

  useEffect(() => {
    dispatch(fetchNews("sports"));
  }, [dispatch]);

  if (error) return <Error />;

  if (loading) return <Loading />;

  const SportsSection = data?.map((sports) => (
    <PagesItem
      key={sports.title}
      title={sports.title}
      image={sports.multimedia}
      abstract={sports.abstract}
      url={sports.url}
      byline={sports.byline}
      date={sports.published_date}
    />
  ));

  return (
    <>
      <h1 className="text-3xl md:text-5xl font-medium text-center my-10">
        Sports
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {SportsSection}
      </div>
      <Footer />
    </>
  );
}
