import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news)

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="p-3 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Side */}
        <div className="p-2">
          <LeftSideNav></LeftSideNav>
        </div>
        {/* Main Content */}
        <div className="border-2 p-2 md:col-span-2">
          {
            news.map(aNews => 
            <NewsCard 
              key={aNews._id}
              news={aNews}
            >
            </NewsCard>)
          }
          
        </div>
        {/* Right Side */}
        <div className="p-2">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;