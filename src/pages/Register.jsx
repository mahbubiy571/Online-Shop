import AuthTabs from "../components/AuthTabs";
import FormInput from "../components/FormInput";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-lg">
        <div className="card-body">
          <AuthTabs />
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
          <div className="form-control mt-6">
            <button className="btn btn-primary w-[320px] h-9">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
