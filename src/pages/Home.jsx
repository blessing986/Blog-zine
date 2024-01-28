import TopHighlights from "../components/TopHighlights";
import { CAROUSEL_DETAILS, DUMMY_DATA } from "../Data";
import Footer from "../components/Footer";
import FirstStorylineImageItem from "../components/StorylineImage/FirstStorylineImageItem";
import SecondStorylineImageItem from "../components/StorylineImage/SecondStorylineImageItem";
import ThirdStorylineImageItem from "../components/StorylineImage/ThirdStorylineImageItem";
import CarouselSlide from "../components/CarouselSlide";

export default function Home() {
  return (
    <>
      <section className="mx-4 md:mx-16">
        {/* Storyline section */}

        <div className="grid md:grid-cols-2 gap-10 md:my-10">
          <FirstStorylineImageItem firstCard={DUMMY_DATA[0]} />

          <div>
            <SecondStorylineImageItem secondCard={DUMMY_DATA[1]} />
            <div className="grid md:grid-cols-2 gap-10">
              <ThirdStorylineImageItem thirdCard={DUMMY_DATA[2]} />
              <ThirdStorylineImageItem thirdCard={DUMMY_DATA[3]} />
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
