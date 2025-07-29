import { Link, useLocation, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Login = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-[360px] bg-white shadow-md rounded-xl p-5">
        <NavLink
          to="/"
          className="flex items-center gap-2 sm:text-2xl text-[18px] font-bold text-primary my-3"
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

        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-[15px]">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered h-9 text-sm focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-400/50"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-[15px]">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered h-9 text-sm focus:outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-400/50"
            />
          </div>

          <div className="pt-2">
            <button className="btn btn-primary w-[320px] h-9 text-[16px] rounded-md">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
