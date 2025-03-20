import React from 'react'
import PackagesCard from "./PackagesCard"
function Packages() {
  return (
    <div className='h-auto w-[85%] rounded-3xl  p-x-3  mt-5 my-20 mx-25 drop-shadow-xl'>
      <p className='font-bold text-3xl  place-self-center py-10'>PACKAGES</p>
      <div>
        <PackagesCard/>
      </div>
    </div>
  )
}

export default Packages