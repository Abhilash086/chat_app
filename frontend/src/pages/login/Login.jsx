import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {loading, login} = useLogin();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login <span className='text-amber-600 font-extrabold'> Chat-App</span>
            </h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text font-semibold'>Username</span>
                </label>
                <input type="text" placeholder='Enter Your Username' className='w-full input focus:ring-2 focus:ring-amber-600 h-10'
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)} />
              </div>
              <div>
                <label className='label p-2'>
                  <span className='text-base label-text font-semibold'>Password</span>
                </label>
                <input type="password" placeholder='Enter Your Password' className='w-full input focus:ring-2 focus:ring-amber-600 h-10'
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)} />
              </div>
              <Link to={"/signup"} className='text-sm hover:underline hover:text-amber-600 mt-2 inline-block'>Don't have an account?</Link>
              <div>
                <button className='btn btn-block btn-sm mt-2'
                  disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Login"}
                </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Login