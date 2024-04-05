import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto p-2">
      <Outlet />
    </div>
  );
};

export default Root;