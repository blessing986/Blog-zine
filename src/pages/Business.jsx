import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";
import Footer from "../components/Footer";

export default function Business() {
  return (
    <>
      <div className="flex overflow-x-auto no-scrollbar">
        <img src={img1} alt="1" className="w-[2000px] h-[700px] mr-20" />
        <img src={img2} alt="2" className="w-[2000px] h-[700px] mr-20" />
        <img src={img3} alt="3" className="w-[2000px] h-[700px] mr-20" />
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20" />
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20" />
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20" />
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20" />
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20" />
        <img src={img4} alt="4" className="w-[2000px] h-[700px] mr-20" />
      </div>

      <Footer />
    </>
  );
}
