import { FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border-[1px] border-solid border-[#0D6EFD] w-[450px] p-[50px] rounded-[20px] flex justify-center items-center flex-col">
        <FaBlog className="mx-auto text-[70px] text-[#0D6EFD] mb-[50px]" />
        <p className="text-[#212529] text-[20px] font-[600]">Username</p>
        <input
          type="text"
          placeholder="Enter your username"
          className="text-[#212529] mt-[10px] mb-[20px] outline-[#0D6EFD] border-[1px] border-solid border-[#0D6EFD] rounded-[10px] w-[300px] text-[15px] p-[5px]"
        />
        <p className="text-[#212529] text-[20px] font-[600]">Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          className="text-[#212529] mt-[10px] mb-[20px] outline-[#0D6EFD] border-[1px] border-solid border-[#0D6EFD] rounded-[10px] w-[300px] text-[15px] p-[5px]"
        />
        <button className="w-[300px] bg-[#0D6EFD] p-[5px] text-white text-[20px] font-[600] rounded-[10px] mb-[20px]">
          Sign In
        </button>
        <p className="text-[#212529] text-[17px]">Don't have an account?</p>
        <Link className="text-[#0D6EFD] font-[500] underline" to="register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
