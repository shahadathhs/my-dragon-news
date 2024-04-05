import { useContext } from "react";
import { AuthContest } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContest);
  const location = useLocation();
  console.log(location.pathname);

  if(loading){
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user) {
    return children;
  } return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;