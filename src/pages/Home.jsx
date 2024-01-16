import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 mx-4 md:mx-16 md:my-10">
        <div>
          <img src={img1} alt="img1" className={styles.img1} />
        </div>

        <div>
          <div>
            <div className="absolute top-80">
              <p>
                <span className="w-40 h-40 bg-white rounded-full">x</span>Technology
              </p>
              <h1>Best Pinterest boards for learning about business</h1>
              <p>
                by Zero<span>.</span> Jan 16,2024
              </p>
            </div>
            <img
              src={img2}
              alt="img1"
              className="w-full h-96 object-cover mb-10 rounded-3xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <img
              src={img3}
              alt="img1"
              className="w-full h-96 object-cover rounded-3xl"
            />
            <img
              src={img4}
              alt="img1"
              className="w-full h-96 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
