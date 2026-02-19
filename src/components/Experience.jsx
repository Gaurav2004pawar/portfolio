 import React from "react"

import Rpc from "../../public/react.png"
import Epc from "../../public/express.png"
import Gpc from "../../public/github.png"
import Mpc from "../../public/mongodb.png"
import Npc from "../../public/nodejs.png"
import Hpc from   "../../public/Html.png"
import Cpc from    "../../public/css.png"
import Jpc from   "../../public/JavaScript.png"

const Experience = () => {

  const cartItem = [
    { id: 1, logo: Rpc , name: "React " },
    { id: 2, logo: Epc , name: "Express " },
    { id: 3, logo: Gpc , name: "Github " },
    { id: 4, logo: Mpc , name: "Mongodb " },
    { id: 5, logo: Npc , name: "Nodejs " },
     { id: 6, logo: Hpc , name: "Html " },
      { id: 7, logo: Cpc , name: "css " },
       { id: 8, logo: Jpc , name: "javascript " }
  ]

  return (
    <div name="Experience" className='max-w-screen-2xl mx-auto container md:px-20 my-20 p-1 rounded-full cursor-pointe '>
      
      <h1 className='text-green-500 text-2xl font-semibold mb-3'>
        Experience
      </h1>

      <span className='underline font-semibold'> I` am Experience bulding project using technology</span>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 rounded-full  ">

        {cartItem.map((item) => (
          <div key={item.id} className="card bg-gray-400 p-4 hover:scale-105 duration-300 border rounded-full ">
            
            <img src={item.logo} alt={item.name} className="w-20 h-20 mx-auto" />

            <div className="mt-4 text-center">
              <h1 className="font-bold text-lg">{item.name}</h1>


            </div>

            
              
            </div>

          
        ))}

      </div>

    </div>
  )
}

export default Experience

