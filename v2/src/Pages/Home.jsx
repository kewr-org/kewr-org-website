import React from 'react'
import Partner from '../Components/Partner'
import Mission from '../Components/Mission'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Contribute from '../Components/Contribute'
import Logo from "../img/tech.png"

function Home() {
  return (
    <div>
<div className="relative z-20 flex items-center overflow-hidden bg-gray-900">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
            <h1 className="flex flex-col text-5xl font-black leading-none text-gray-300 uppercase font-mono sm:text-8xl">
                gateway  
                <span className="text-5xl sm:text-7xl">
                    to the  
                </span>
                <span className="text-3xl sm:text-7xl">
                    Kewr ecosystem  
                </span>
            </h1>
            <p className="text-sm text-gray-500 sm:text-base">
              Kewr is a cutting-edge technology company dedicated to revolutionizing the way we interact with the world
            </p>
            <div className="flex mt-8">
                <a href="#" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                    Learn More
                </a>
            </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
    <img src={Logo} className="m-auto w-full md:max-w-xl" />
</div>
    </div>  
</div>
<Partner />
<Mission />
<Contribute />
<Section3 />
<Section4 />
</div>
  )
}

export default Home