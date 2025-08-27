import React from 'react'
import { SIGNIN_BG_URL } from '../utils/constant'
import GptSearcher from './GptSearcher'

const GptSearchPage = () => {
    return (
        <div>
            <div className="fixed overflow-hidden object-cover w-full h-full -z-10">
                <img src={SIGNIN_BG_URL} className="w-full h-full object-cover scale-110" alt="bg-wallpaper"></img>
                <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60"></div>
            </div>
            <div className = "pt-[15%]">
                 <GptSearcher/>
            </div>  
        </div>
    )
}

export default GptSearchPage