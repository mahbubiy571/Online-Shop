import FormInput from "../components/FormInput";
import AuthTabs from "../components/AuthTabs";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-[360px] bg-white shadow-md rounded-xl p-5">
        <AuthTabs />

        <form className="space-y-4">
          <FormInput
            name="email"
            type="email"
            placeholder="example@mail.com"
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="••••••••"
            label="Password"
          />
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
