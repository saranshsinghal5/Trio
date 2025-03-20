import React from 'react'
import PackagesCard from "./PackagesCard"
function Packages() {
  return (
    <div className='h-auto w-[85%] rounded-3xl border-t-3 p-x-3 border-x-5 mt-5 my-20 mx-25 drop-shadow-xl'>
      <p className='font-bold text-3xl  place-self-center py-10'>PACKAGES</p>
      <div>
        <PackagesCard/>
      </div>
    </div>
  )
}

export default Packages