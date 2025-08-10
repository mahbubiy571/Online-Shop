import AuthTabs from "../components/AuthTabs";
import FormInput from "../components/FormInput";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card max-w-75 sm:max-w-96 bg-white shadow-lg rounded-xl p-5">
        <AuthTabs />
        <form onSubmit={handleSubmit} className="space-y-3">
          <FormInput
            name="name"
            type="text"
            placeholder="Your name"
            label="Name"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="example@mail.com"
            label="Email"
          />
          <FormInput
            name="tel"
            type="tel"
            placeholder="+998 90 390 03 26"
            label="Phone Number"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="••••••••"
            label="Password"
          />
          <div className="pt-1">
            <button className="btn btn-primary w-full text-[16px] h-9 rounded-md">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
