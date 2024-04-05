import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const News = () => {
  const {id} = useParams()
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border-2 p-2 md:col-span-2">
          <p>This is news details</p>
          <p>{id}</p>
        </div>
        {/* Right Side */}
        <div className="p-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;

News.propTypes = {
  news: PropTypes.object,
}