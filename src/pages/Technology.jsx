import { useEffect } from "react";
import PagesItem from "./PagesItem";
import Footer from "../components/Footer";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../state/fetchingDataState";
import Loading from "../components/Loading";

export default function Technology() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.fetch.data);
  const loading = useSelector((state) => state.fetch.isLoading);
  const error = useSelector((state) => state.fetch.error);

  useEffect(() => {
    dispatch(fetchNews("technology"));
  }, [dispatch]);

  if (error) return <Error />;

  if (loading) return <Loading />;

  const TechnologySection = data?.map((technology) => (
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
      <h1 className="text-3xl md:text-5xl font-medium text-center my-10">
        Technology
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {TechnologySection}
      </div>
      <Footer />
    </>
  );
}
