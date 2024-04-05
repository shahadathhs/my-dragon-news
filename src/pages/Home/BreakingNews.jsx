import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-base-200 p-2 rounded-xl my-2">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/" className="mr-12 hover:bg-gray-200 rounded-xl p-2">
          I can be a React component, multiple React components, or ......
        </Link>
        <Link to="/" className="mr-12 hover:bg-gray-200 rounded-xl p-2">
          I can be a React component, multiple React components, or ......
        </Link>
        <Link to="/" className="mr-12 hover:bg-gray-200 rounded-xl p-2">
          I can be a React component, multiple React components, or ......
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;