import { Link, useLocation, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Register = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-lg">
        <div className="card-body">
          <NavLink
            to="/"
            className="flex items-center gap-2 sm:text-2xl text-[18px] font-bold text-primary my-2"
          >
            <ShoppingCart className="sm:w-7 sm:h-7 text-accent" />
            <span>
              Online<span className="text-accent">Shop</span>
            </span>
          </NavLink>
          <div className="flex w-[320px] h-9 bg-blue-50 rounded-md overflow-hidden py-1 px-1">
            <Link
              to="/login"
              className={`w-1/2 flex items-center justify-center text-[15px] font-medium rounded-b-md transition-all duration-200 ${
                isActive("/login")
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className={`w-1/2 flex items-center justify-center text-[15px] font-medium rounded-[6px] transition-all duration-200 ${
                isActive("/register")
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </Link>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered h-9 focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="input input-bordered h-9 focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              placeholder="+998 90 390 03 26"
              className="input input-bordered h-9 focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered h-9 focus:outline-none focus:border-blue-500 shadow-blue-500 focus:shadow-lg focus:shadow-blue-400/50 rounded"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary w-[320px] h-9">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
