import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { AVATAR_URL, LOGO_URL } from '../utils/constant';

function Header() {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const userInfo =useSelector((store)=>store.user);
  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(removeUser());
  };

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid, email, displayName }));
      navigate("/browse");
    }
    else{
       navigate("/");
    }
  });
  return () => unsubscribe();
}, []);

  return (
    <div className="absolute  py-2 px-2  z-10 flex justify-between bg-gradient-to-b from-black w-full">
      <img src={LOGO_URL}className="w-52" alt="logo" ></img>
      {userInfo && (<div className="flex items-center">
        <img src={AVATAR_URL} alt="profileLogo" className="w-12 h-12 rounded-lg"></img>
        <button onClick={handleSignOut} className="text-red-600 font-bold mx-2">SignOut ({userInfo.displayName})</button>
      </div>)}
    </div>
  )
}

export default Header