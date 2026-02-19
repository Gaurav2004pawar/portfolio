import React from "react"

import Rpc from "../../public/react.png"
import Epc from "../../public/express.png"
import Gpc from "../../public/github.png"
import Mpc from "../../public/mongodb.png"
import Npc from "../../public/nodejs.png"
import Hpc from   "../../public/Html.png"
import Cpc from    "../../public/css.png"
import Jpc from   "../../public/JavaScript.png"

const PortFolio = () => {

  const cartItem = [
    { id: 1, logo: Rpc , name: "React Project" },
    { id: 2, logo: Epc , name: "Express Project" },
    { id: 3, logo: Gpc , name: "Github Project" },
    { id: 4, logo: Mpc , name: "Mongodb Project" },
    { id: 5, logo: Npc , name: "NodeJs Project" },
     { id: 6, logo: Hpc , name: "Html Project" },
      { id: 7, logo: Cpc , name: "css Project" },
       { id: 8, logo: Jpc , name: "javascript Project" }
  ]

  return (
    <div name="Portfolio" className='max-w-screen-2xl mx-auto container md:px-20 my-20 p-1'>
      
      <h1 className='text-green-500 text-2xl font-semibold mb-3'>
        Portfolio
      </h1>

      <span className='underline font-semibold'>Featured Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">

        {cartItem.map((item) => (
          <div key={item.id} className="card bg-base-100  p-4 hover:scale-105 duration-300 bg-gray-300">
            
            <img src={item.logo} alt={item.name} className="w-20 h-20 mx-auto" />

            <div className="mt-4 text-center">
              <h1 className="font-bold text-lg">{item.name}</h1>

              <p className="text-sm mt-2">
                MERN stack based project built for practice and learning.
              </p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="btn btn-primary btn-sm">
                Live Demo
              </button>

              <button className="btn btn-outline btn-sm bg-green-500 text-white">
                Source Code
              </button>
              <br/>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default PortFolio
