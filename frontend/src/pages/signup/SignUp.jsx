import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword:"",
    gender: ""
  });

  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs, gender})
  }

  const {loading, signup} = useSignup();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(inputs)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-amber-600 font-extrabold'> Chat-App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Full Name</span>
            </label>
            <input type="text" placeholder='Ex: Rocky Singh' className='w-full input focus:ring-2 focus:ring-amber-600 h-10' 
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Username</span>
            </label>
            <input type="text" placeholder='Ex: rockysingh001' className='w-full input focus:ring-2 focus:ring-amber-600 h-10' 
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs, username: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Password</span>
            </label>
            <input type="password" placeholder='' className='w-full input focus:ring-2 focus:ring-amber-600 h-10' 
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text font-semibold'>Confirm Password</span>
            </label>
            <input type="password" placeholder='' className='w-full input focus:ring-2 focus:ring-amber-600 h-10' 
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}/>
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>
          
          <Link to={"/login"} className='text-sm hover:underline hover:text-amber-600 mt-2 inline-block'>Already have an account?</Link>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp