import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import q1 from '../../../assets/qZone1.png';
import q2 from '../../../assets/qZone2.png';
import q3 from '../../../assets/qZone2.png';
import bg1 from '../../../assets/bg1.png'

const RightSideNav = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <h2 className="font-bold">Login with</h2>
        <button className="btn btn-outline text-blue-500"><FaGoogle />Login with Google</button>
        <button className="btn btn-outline"><FaGithub />Login with GitHub</button>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold">Find Us On</h2>
        <div className="text-gray-500 border-gray-500">
          <div className="flex gap-2 items-center border-2 rounded-t-lg border-b-0 p-2">
            <button className="btn rounded-full"><FaFacebook /></button>
            <p>Facebook</p>
          </div>
          <div className="flex gap-2 items-center border-2 border-b-0 p-2">
            <button className="btn rounded-full"><FaTwitter /></button>
            <p>Twitter</p>
          </div>
          <div className="flex gap-2 items-center rounded-b-lg border-2 p-2">
            <button className="btn rounded-full"><FaInstagramSquare /></button>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="bg-base-200 rounded-xl space-y-3">
        <p className="font-bold p-3 pl-5">Q-Zone</p>
        <img src={q1} alt="" />
        <img src={q2} alt="" />
        <img src={q3} alt="" />
      </div>
      <div className="hero rounded-xl">
        <img src={bg1} alt="" />
        <div className="hero-overlay rounded-xl bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">Create an Amazing Newspaper</h1>
            <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default RightSideNav;