import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContest } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Login = () => {

  const { signIn } = useContext(AuthContest);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email,password);
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // sign in
    signIn(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        // navigate after login
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero p-4 m-4 rounded-xl bg-base-200">
        <div className="hero-content flex flex-col">
          <p className="font-bold text-3xl">Please Login</p>
          <div className="hero-content card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>Do not have an account? Please <Link to="/register" className="text-blue-500" >Register</Link></p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Login;