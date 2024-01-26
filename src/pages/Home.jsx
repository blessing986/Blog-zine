import TopHighlights from "../components/TopHighlights";
import Carousel from "../components/Carousel";
import {
  CAROUSEL_DETAILS,
  FIRST_STORYLINE_IMAGE_DETAILS,
  SECOND_STORYLINE_IMAGE_DETAILS,
  THIRD_STORYLINE_IMAGE_DETAILS,
} from "../Data";
import Footer from "../components/Footer";
import FirstStorylineImageItem from "../components/StorylineImage/FirstStorylineImageItem";
import SecondStorylineImageItem from "../components/StorylineImage/SecondStorylineImageItem";
import ThirdStorylineImageItem from "../components/StorylineImage/ThirdStorylineImageItem";

export default function Home() {
  const CarouselList = CAROUSEL_DETAILS.map((carousel) => (
    <Carousel id={carousel.id} key={carousel.id} image={carousel.image} />
  ));

  const FirstStorylineImageList = FIRST_STORYLINE_IMAGE_DETAILS.map(
    (storyline) => (
      <FirstStorylineImageItem
        id={storyline.id}
        key={storyline.id}
        image={storyline.image}
        category={storyline.category}
        title={storyline.title}
        description={storyline.description}
      />
    )
  );

  const SecondStorylineImageList = SECOND_STORYLINE_IMAGE_DETAILS.map(
    (storyline) => (
      <SecondStorylineImageItem
        id={storyline.id}
        key={storyline.id}
        image={storyline.image}
        category={storyline.category}
        title={storyline.title}
      />
    )
  );

  const ThirdStorylineImageList = THIRD_STORYLINE_IMAGE_DETAILS.map(
    (storyline) => (
      <ThirdStorylineImageItem
        id={storyline.id}
        key={storyline.id}
        image={storyline.image}
        category={storyline.category}
        title={storyline.title}
        color={storyline.color}
      />
    )
  );

  return (
    <>
      <section className="mx-4 md:mx-16">
        {/* Storyline section */}

        <div className="grid md:grid-cols-2 gap-10 md:my-10">
          {FirstStorylineImageList}
          <div>
            {SecondStorylineImageList}
            <div className="grid md:grid-cols-2 gap-10">
              {ThirdStorylineImageList}
            </div>
          </div>
        </div>

        <TopHighlights />

        <div className="mb-20 bg-sky-100 h-0.5"></div>

        <Carousel />
      </section>

      <Footer />
    </>
  );
}
