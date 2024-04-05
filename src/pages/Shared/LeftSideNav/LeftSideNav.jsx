import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

  const [catagories, setCatagories] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCatagories(data))
  },[])

  return (
    <div>
      <h2 className="font-bold text-center p-2">All Catagories</h2>
      {
        catagories.map(category => <div  
        className="text-gray-500 p-2 rounded-xl hover:font-bold hover:bg-base-200"    
        key={category.id}> <Link to={`/category/${category.id}`}>{category.name}</Link></div>)
      }
    </div>
  );
};

export default LeftSideNav;