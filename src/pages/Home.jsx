import { useState } from "react";
import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";

export default function Home() {
  const [hover, setHover] = useState(false);

  function handleMouseOver() {
    setHover((hover) => !hover);
  }

  function handleMouseOut() {
    setHover((hover) => !hover);
  }

  let toggleClassCheck = hover ? "underline" : "";

  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 mx-4 md:mx-16 md:my-10">
        <div
          className="relative cursor-pointer"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="w-full h-[400px] md:h-[808px] overflow-hidden rounded-3xl">
            <img
              src={img1}
              alt="img1"
              className="object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="absolute top-40 md:top-1/2 ml-6 md:ml-10 text-white">
            <p className="flex items-center bg-red-600 w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
              <p className="w-4 h-4 bg-white rounded-full mx-2"></p>Lifestyle
            </p>

            <h1
              className={`text-white text-2xl md:text-6xl font-bold my-4 ${toggleClassCheck}`}
            >
              Ten tell-tale signs you need to get a new startup.
            </h1>

            <p className="text-white text-lg md:text-2xl my-4">
              No visited raising gravity outward subject my cottage Mr be. Hold
              do <br /> at tore in park feet near my case.
            </p>

            <div className="hidden md:flex items-center text-white text-2xl font-medium">
              <p>
                by <span className="hover:underline">Zero</span>{" "}
              </p>
              <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
              <p>Jan 16,2024</p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative cursor-pointer"
           onMouseOver={handleMouseOver}
           onMouseOut={handleMouseOut}>
            <div className="w-full h-96 overflow-hidden rounded-3xl mb-10">
              <img
                src={img2}
                alt="img1"
                className="object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
              <p className="flex items-center bg-yellow-300 w-32 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
                <p className="w-4 h-4 bg-white rounded-full mx-2"></p>Technology
              </p>

              <h1 className={`text-white text-2xl md:text-4xl font-bold my-4 ${toggleClassCheck}`}>
                Best Pinterest boards for learning about business
              </h1>

              <div className="hidden md:flex items-center text-white text-2xl font-medium">
                <p>
                  by <span className="hover:underline">Zero</span>{" "}
                </p>
                <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
                <p>Jan 16,2024</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative cursor-pointer"
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}>
              <div className="w-full h-96 overflow-hidden rounded-3xl">
                <img
                  src={img3}
                  alt="img1"
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
                <p className="flex items-center bg-green-500 w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
                  <p className="w-4 h-4 bg-white rounded-full mx-2"></p>
                  Business
                </p>

                <h1 className={`text-white text-2xl md:text-4xl font-bold my-4 ${toggleClassCheck}`}>
                  Five intermediate guide to business
                </h1>

                <div className="hidden md:flex items-center text-white text-2xl font-medium">
                  <p>
                    by <span className="hover:underline">Zero</span>{" "}
                  </p>
                  <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
                  <p>Jan 16,2024</p>
                </div>
              </div>
            </div>

            <div className="relative cursor-pointer"
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}>
              <div className="w-full h-96 overflow-hidden rounded-3xl">
                <img
                  src={img4}
                  alt="img1"
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>
              <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
                <p className="flex items-center bg-blue-500 w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
                  <p className="w-4 h-4 bg-white rounded-full mx-2"></p>
                  Sports
                </p>

                <h1 className={`text-white text-2xl md:text-4xl font-bold my-4 ${toggleClassCheck}`}>
                  15 reasons to choose <br /> startup
                </h1>

                <div className="hidden md:flex items-center text-white text-2xl font-medium">
                  <p>
                    by <span className="hover:underline">Zero</span>{" "}
                  </p>
                  <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
                  <p>Jan 16,2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative">
        <div class="max-w-[300px] max-h-[300px] overflow-hidden rounded-3xl">
          <img
            src={img2}
            className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
            alt="jj"
          />
        </div>
        <div>
          <h1 className="absolute top-2">i love you</h1>
        </div>
      </div> */}
    </>
  );
}
