import React, { useState , useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdminDataContext } from '../context/AdminContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';

const AdminLogin = () => {
  const [ email , setEmail] = useState("");
  const [ password , setPassword] = useState("");
  const [ secretCode , setSecretCode] = useState("");
  const { admin , setAdmin } = useContext(AdminDataContext);
  const [error , setError] = useState("");
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false);
  const [message , setMessage] = useState("");

 const submitHandler = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("Logging in...");
  try {
    const userData = {
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}admin/login`,
      userData
    );

    // If success
    if (response.status === 200) {
      const data = response.data;
      setAdmin(data.admin);
      setError("");
      localStorage.setItem("token", data.token);
      setLoading(false);
      setMessage("");
      navigate("/admin-dashboard");
      setEmail("");
      setPassword("");
      toast.success("Login successful!");
    }
  } catch (error) {
    console.error("Login failed:", error);
    setLoading(false);
    setMessage("");
    // Custom error message
    if (error.response && error.response.status === 401) {
      setError("Invalid email or password");
    } else {
      setError("Something went wrong. Please try again.");
    }
  }

  
};



  return (
   <>
   {loading && <Loading message={message}/>}
    <div className=' h-screen w-full p-7 flex flex-col items-center justify-between'>
       <div className='w-full md:w-1/3'>
          <form className='w-full' onSubmit={(e) => submitHandler(e)}>
          <img  className='w-20' src="/instaraUser.jpg" alt="" />
          <h3 className='text-2xl mb-2 font-semibold'>What's your email</h3>
          <input 
              className='w-full p-2 border border-gray-300 rounded bg-[#eeeeee] mb-7 text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => setError("")}
              required 
          />
          <h3 className='text-2xl mb-2 font-semibold'>Enter Password</h3>
          <input 
              className='w-full p-2 border border-gray-300 rounded bg-[#eeeeee] mb-7 text-lg placeholder:text-base'
              type="password"
              placeholder='********' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => setError("")}
              required 
          /> 
          <input 
              className='w-full p-2 border border-gray-300 rounded bg-[#eeeeee] mb-4 text-lg placeholder:text-base'
              type="text"
              placeholder='Secret Code' 
              value={secretCode}
              onChange={(e) => setSecretCode(e.target.value)}
              onClick={() => setError("")}
              required 
          /> 
          {error && <p className='text-red-600 mb-4 text-sm'>{error}</p>}
          <button
          className='w-full p-2 rounded bg-[#111] text-white mb-4 text-xl font-semibold'
          >
            Login
          </button>
          </form>
          <Link to={"/admin-signup"} className='text-blue-600 hover:underline'>Be the admin ? create an account</Link> 
       </div>
       <div className='w-full md:w-1/3 '>
        <Link
        to={"/store-login"}
        className='w-full flex items-center justify-center p-3 rounded bg-[#111] text-white mb-7 text-xl font-semibold'
        >
          SignIn as Restron
        </Link>
       </div>
    </div>
   </>
  )
}

export default AdminLogin;
