// import React from 'react'

const Home = () => {
  return (
    <div className="h-screen bg-neutral-900 font-mono grid grid-cols-2 items-center">
        <div className="">
          <img src="../../public/images/theprof-nobg.png" className="w-96 mx-auto shadow-2xl"/>
        </div>
        <p className="text-white">
          <span className="text-6xl  font-semibold">suntzaur</span><br />
          <span className="text-2xl">Aspiring Software Engineer from Philippines</span>
        </p>
    </div>
  )
}

export default Home