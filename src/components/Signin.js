import { checkValidEmailAndPassword } from "../utils/validation";
import Header from "./Header"
import {useState,useRef} from "react"
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name =useRef(null);
  const email =useRef(null);
  const password =useRef(null);
  const [errMsg,setErrMssg]=useState(null);
  const [signInStatus,setSignInStatus] =useState(true);
  const handleSignin =()=>{
    setSignInStatus(prev=>!prev)
  }
  const handleSignclick =()=>{
    const errormsg =checkValidEmailAndPassword(email.current.value,password.current.value);
    setErrMssg(errormsg);
    if(errMsg)return;
    if(!signInStatus){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
        }).catch((error) => {
          setErrMssg(error.message +". With the error code "+error.code);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMssg(errorMessage +". With the error code "+errorCode);
      });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const {uid,email,displayName,} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMssg(errorMessage +". With the error code "+errorCode);
      });
    }
  }
  return (
    <div>
      <Header />
      <div className="absolute overflow-hidden h-full">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg" className="w-full h-full object-cover scale-110" alt="bg-wallpaper"></img>
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60"></div>
      </div>
      <form className="absolute top-44 w-3/12 mx-auto right-0 left-0 bg-black bg-opacity-60 rounded-lg py-10 px-10 text-white " onSubmit={(e)=>{e.preventDefault();}}>
        <h1 className="text-3xl mb-8 font-bold">{signInStatus?"Sign In":"Sign Up"}</h1>
        {!signInStatus &&  <input type="text" ref = {name} placeholder="Name" className="my-2 w-full bg-gray-700 h-10 p-3 placeholder-gray-300"></input>}
        <input type="email" ref={email} placeholder="Email" className="my-2 w-full bg-gray-700 h-10 p-3 placeholder-gray-300"></input>
        <input type="password" ref={password} placeholder="Password" className="my-2 w-full bg-gray-700 h-10 p-3 placeholder-gray-300"></input>
        {errMsg ?(<p className ="text-red-600 font-bold mt-2">{errMsg}</p>):(<></>)}
        <button onClick={handleSignclick} className="bg-red-600 rounded-lg p-2 my-4 w-full">{signInStatus?"Sign In":"Sign Up"}</button>
        <p className="text-sm my-4 cursor-pointer" onClick={handleSignin}>{signInStatus?"New to Netflix?Sign up now.":"Already registered? Sign in Now."}</p>
      </form>
    </div>
  )
}

export default Signin