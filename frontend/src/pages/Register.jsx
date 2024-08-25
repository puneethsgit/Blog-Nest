import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register",{username,email,password});
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      navigate("/login")
      setError(false)
    } catch (err) {
      setError(true)
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4  ">
        <h1 className="text-lg md:text-xl font-extrabold ">
          <Link to="/">Blog Nest</Link>
        </h1>
        <h3>
          <Link to="/login">Login</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left hover:text-blue-800">
            Create Your Account
          </h1>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-double"
            placeholder="Enter a username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-double"
            placeholder="Enter your Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="w-full px-4 py-2 border-2 border-black outline-double"
            placeholder="Enter your Password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-blue-800 hover:text-black"
          >
            Register
          </button>
          {error&& <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center space-x-3 items-center">
            <p className="">Already Have Account?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
