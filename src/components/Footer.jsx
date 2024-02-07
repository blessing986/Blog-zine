import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import twitterX from "../assets/twitterX.png";
import linkedIn from "../assets/linkedIn.png";

export default function Footer() {
  return (
    <>
      <section className="bg-slate-900 mt-20 pt-6 px-4">
        <div className="flex justify-between items-center pb-6 ">
          <img src={logo} alt="logo" className="w-32 md:w-52" />
          <div className="flex">
            <img src={instagram} alt="instagram" className="w-10 md:w-12" />
            <img src={facebook} alt="facebook" className="w-10 md:w-12" />
            <img src={youtube} alt="youtube" className="w-10 md:w-12" />
            <img src={twitterX} alt="twitterX" className="w-10 md:w-12" />
            <img src={linkedIn} alt="linkedIn" className="w-10 md:w-12" />
          </div>
        </div>

        <hr />

        {/* <div className="flex flex-col md:flex-row justify-around py-10 text-slate-200"> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 text-slate-200">
          <div>
            <h1 className="text-sky-700 text-3xl font-medium mb-4">Sections</h1>
            <ul>
              <li className="text-2xl mb-4">Headlines</li>
              <li className="text-2xl mb-4">Local</li>
              <li className="text-2xl mb-4">Politics</li>
              <li className="text-2xl mb-4">Health</li>
              <li className="text-2xl mb-4">Business</li>
              <li className="text-2xl mb-4">Entertainment</li>
              <li className="text-2xl mb-4">Environment</li>
              <li className="text-2xl mb-4">Sports</li>
              <li className="text-2xl mb-4">Crime</li>
            </ul>
          </div>

          <div>
            <h1 className="text-sky-700 text-3xl font-medium mb-4">
              Programmes
            </h1>
            <ul>
              <li className="text-2xl mb-4">Sunrise Daily</li>
              <li className="text-2xl mb-4">Sunrise</li>
              <li className="text-2xl mb-4">Business Morning</li>
              <li className="text-2xl mb-4">Politics Today</li>
              <li className="text-2xl mb-4">Sports This Morning</li>
              <li className="text-2xl mb-4">Hard Copy</li>
              <li className="text-2xl mb-4">Network Africa</li>
              <li className="text-2xl mb-4">Aviation This Week</li>
              <li className="text-2xl mb-4">More Programmes</li>
            </ul>
          </div>

          <div>
            <div>
              <h1 className="text-sky-700 text-3xl font-medium mb-4">
                Live TV
              </h1>
              <ul>
                <li className="text-2xl mb-4">PC & Mac</li>
                <li className="text-2xl mb-4">iPad & iPhone</li>
                <li className="text-2xl mb-4">Android</li>
              </ul>
            </div>

            <div className="mt-14">
              <h1 className="text-sky-700 text-3xl font-medium mb-4">Apps</h1>
              <ul>
                <li className="text-2xl mb-4">Download Android App</li>
                <li className="text-2xl mb-4">Download for iOS</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-sky-700 text-3xl font-medium mb-4">About Us</h1>
            <ul>
              <li className="text-2xl mb-4">About Blogzine</li>
              <li className="text-2xl mb-4">Meet The Team</li>
              <li className="text-2xl mb-4">Executive Management</li>
              <li className="text-2xl mb-4">Management</li>
              <li className="text-2xl mb-4">Presenters</li>
              <li className="text-2xl mb-4">Contact</li>
              <li className="text-2xl mb-4">Privacy Policy</li>
              <li className="text-2xl mb-4">Advertise</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
