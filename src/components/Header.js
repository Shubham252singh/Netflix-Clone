import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../utils/ReduxStore';
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'

function Header() {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const userInfo =useSelector((store)=>store.user);
  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(removeUser());
    await persistor.flush();
    await persistor.purge();
    navigate("/");
  };

  return (
    <div className="absolute  py-2 px-2  z-10 flex justify-between bg-gradient-to-b from-black w-full">
      <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-52 h-28" alt="logo" ></img>
      {userInfo.displayName && (<div className="flex items-center">
        <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="profileLogo" className="w-20 h-20"></img>
        <button onClick={handleSignOut} className="text-red-600 font-bold mx-2">SignOut({userInfo.displayName})</button>
      </div>)}
    </div>
  )
}

export default Header