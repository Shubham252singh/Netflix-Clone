import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className = "pl-10 pt-[20%]  aspect-video absolute text-white bg-gradient-to-r from-black">
        <h1 className ="text-4xl font-bold my-2">{title}</h1>
        <p className ="text-lg w-1/4">{overview}</p>
        <div className ="my-2">
            <button className ="m-2 w-28 p-2 bg-gray-600 text-white rounded-lg h-14 hover:bg-opacity-60 ">►► Play</button>
           <button className ="m-2 w-28 p-2 bg-gray-600 text-white rounded-lg  h-14 hover:bg-opacity-60">More Info (i)</button>
        </div>
    </div>
  )
}

export default MovieTitle