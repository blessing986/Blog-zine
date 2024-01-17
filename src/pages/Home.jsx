import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 mx-4 md:mx-16 md:my-10">
        <div className="relative">
          <div className="absolute top-40 md:top-1/2 ml-6 md:ml-10">
            
            <p className="flex items-center bg-red-600 w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
              <p className="w-4 h-4 bg-white rounded-full mx-2"></p>Lifestyle
            </p>

            <h1 className="text-white text-2xl md:text-6xl font-bold my-4">
              Ten tell-tale signs you need to get a new startup.
            </h1>

            <p className="text-white text-lg md:text-2xl my-4">
              No visited raising gravity outward subject my cottage Mr be. Hold
              do <br /> at tore in park feet near my case.
            </p>

            <div className="hidden md:flex items-center text-white text-2xl font-medium">
              <p className="">by Zero</p>
              <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
              <p>Jan 16,2024</p>
            </div>
          </div>

          <img src={img1} alt="img1" className={styles.img1} />
        </div>

        <div>
          <div className="relative">
            <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
              <p className="flex items-center bg-yellow-300 w-32 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
                <p className="w-4 h-4 bg-white rounded-full mx-2"></p>Technology
              </p>

              <h1 className="text-white text-2xl md:text-4xl font-bold my-4">
                Best Pinterest boards for learning about business
              </h1>

              <div className="hidden md:flex items-center text-white text-2xl font-medium">
                <p className="">by Zero</p>
                <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
                <p>Jan 16,2024</p>
              </div>
            </div>

            <img
              src={img2}
              alt="img1"
              className="w-full h-96 object-cover mb-10 rounded-3xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
                <p className="flex items-center bg-green-500 w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
                  <p className="w-4 h-4 bg-white rounded-full mx-2"></p>
                  Business
                </p>

                <h1 className="text-white text-2xl md:text-4xl font-bold my-4">
                  Five intermediate guide to business
                </h1>

                <div className="hidden md:flex items-center text-white text-2xl font-medium">
                  <p className="">by Zero</p>
                  <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
                  <p>Jan 16,2024</p>
                </div>
              </div>

              <img
                src={img3}
                alt="img1"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
            <div className="relative">
              <div className="absolute top-56 md:top-40 ml-6 md:ml-10">
                <p className="flex items-center bg-blue-500 w-28 py-0.5 md:py-2 rounded-lg font-medium md:font-bold text-white">
                  <p className="w-4 h-4 bg-white rounded-full mx-2"></p>
                  Sports
                </p>

                <h1 className="text-white text-2xl md:text-4xl font-bold my-4">
                  15 reasons to choose <br/> startup
                </h1>

                <div className="hidden md:flex items-center text-white text-2xl font-medium">
                  <p className="">by Zero</p>
                  <p className="w-1.5 h-1.5 bg-white rounded-full mx-6"></p>
                  <p>Jan 16,2024</p>
                </div>
              </div>
              <img
                src={img4}
                alt="img1"
                className="w-full h-96 object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
