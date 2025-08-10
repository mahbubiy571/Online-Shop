import FormInput from "../components/FormInput";
import AuthTabs from "../components/AuthTabs";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card max-w-96 bg-white shadow-lg rounded-xl p-5">
        <AuthTabs />
        <form onSubmit={handleSubmit} className="space-y-3">
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
          <div className="pt-1">
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
