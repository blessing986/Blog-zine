import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import TopHighlights from "../components/TopHighlights";
import Footer from "../components/Footer";
import FirstStorylineImageItem from "../components/StorylineImage/FirstStorylineImageItem";
import SecondStorylineImageItem from "../components/StorylineImage/SecondStorylineImageItem";
import ThirdStorylineImageItem from "../components/StorylineImage/ThirdStorylineImageItem";
import CarouselSlide from "../components/CarouselSlide";
import "../index";
import Error from "../components/Error";
import { fetchNews } from "../state/fetchingDataState";
import Loading from "../components/Loading";

export default function Home() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.fetch.data);
  const loading = useSelector((state) => state.fetch.isLoading);
  const error = useSelector((state) => state.fetch.error);

  useEffect(() => {
    dispatch(fetchNews("home"));
  }, [dispatch]);

  if (error) return <Error />;

  if (loading) return <Loading />;

  return (
    <>
      <section className="mx-4 md:mx-6">
        {/* Storyline section */}

        <div className="grid lg:grid-cols-2 gap-5">
          <FirstStorylineImageItem firstCard={data[0]} />

          <div>
            <SecondStorylineImageItem secondCard={data[1]} />
            <div className="grid md:grid-cols-2 gap-5">
              <ThirdStorylineImageItem thirdCard={data[2]} />
              <ThirdStorylineImageItem thirdCard={data[5]} />
            </div>
          </div>
        </div>

        {/* <TopHighlights />

        <div className="mb-20 bg-sky-100 h-0.5"></div> */}

        {/* <CarouselSlide /> */}
      </section>

      <Footer />
    </>
  );
}
