import Header from "./Header"
import {useState} from "react"

function Signin() {
  const [signInStatus,setSignInStatus] =useState(true);
  const handleSignin =()=>{
      setSignInStatus(prev=>!prev)
  }
  return (
    <div>
      <Header />
      <div className="absolute overflow-hidden h-full">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" className="w-full h-full object-cover scale-110" alt="bg-wallpaper"></img>
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60"></div>
      </div>
      <form className="absolute top-44 w-3/12 mx-auto right-0 left-0 bg-black bg-opacity-60 rounded-lg py-10 px-10 text-white ">
        <h1 className="text-3xl mb-8 font-bold">{signInStatus?"Sign In":"Sign Up"}</h1>
        {!signInStatus &&  <input type="text" placeholder="Name" className="my-2 w-full bg-gray-700 h-10 p-3 placeholder-gray-300"></input>}
        <input type="text" placeholder="Email or mobile number" className="my-2 w-full bg-gray-700 h-10 p-3 placeholder-gray-300"></input>
        <input type="text" placeholder="Password" className="my-2 w-full bg-gray-700 h-10 p-3 placeholder-gray-300"></input>
        <button className="bg-red-600 rounded-lg p-2 my-4 w-full">{signInStatus?"Sign In":"Sign Up"}</button>
        <p className="text-sm my-4 cursor-pointer" onClick={handleSignin}>{signInStatus?"New to Netflix?Sign up now.":"Already registered? Sign in Now."}</p>
      </form>
    </div>
  )
}

export default Signin