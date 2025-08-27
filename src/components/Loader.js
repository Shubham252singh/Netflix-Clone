const Loader = () => {
  return (
    <div className ="absolute top-0 bg-black bg-opacity-60 flex justify-center items-center min-h-screen w-screen z-10">
        <div className ="loader p-4 flex rounded-xl space-x-8 ">
            <div className = "bg-red-800 rounded-full animate-bounce p-4"></div>
            <div className = "bg-red-800 rounded-full animate-bounce p-4"></div>
            <div className = "bg-red-800 rounded-full animate-bounce p-4"></div>
        </div>
    </div>
  )
}

export default Loader