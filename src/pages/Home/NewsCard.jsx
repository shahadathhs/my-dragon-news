import { FaRegThumbsUp } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        
        <div className="flex flex-wrap justify-between">
          <div className="flex space-x-4">
            <img alt="" src={news.author.img} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
              <span className="text-xs dark:text-gray-600">4 hours ago</span>
            </div>
          </div>
          <div className="space-x-2">
            <button aria-label="Share this post" type="button" className="p-2 text-center">
              <CiShare2 />
            </button>
            <button aria-label="Bookmark this post" type="button" className="p-2">
              <CiBookmark />
            </button>
          </div>
        </div>
        
        <div>
          <img src={news.thumbnail_url} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
          <h2 className="mb-1 text-xl font-semibold">{news.title}</h2>
          {
            news.details.length > 200 
            ? 
            <p className="text-sm dark:text-gray-600">
              {news.details.slice(0,200)} 
              <Link news={news} to={`/news/${news._id}`} className="text-red-500">Read More...</Link>
            </p> 
            :
            <p className="text-sm dark:text-gray-600">{news.details}</p>
          }
        </div>
        
        <div className="flex flex-wrap justify-between">
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <span>30</span>
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <FaRegThumbsUp />
            <span>283</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object,
}