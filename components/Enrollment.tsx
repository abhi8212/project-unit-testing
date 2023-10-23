import React from 'react'

const Enrollment = () => {
  return (
    <div className='w-full bg-green-900 py-6'>
      <div className="flex flex-col lg:flex-row items-center pl-11 m-6">
        <div className="lg:w-3/4 lg:mr-4">
          <h1 className='text-4xl md:text-5xl text-white mb-3'>A Brighter Future For All</h1>
          <p className='text-lg md:text-xl leading-relaxed font-serif font-medium text-white'>
            The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.
          </p>
        </div>
        <button className="bg-white hover:bg-slate-100 text-black font-bold py-2 px-4  border-white  rounded-full mt-4">
          Enrollment Now
        </button>
      </div>
    </div>
  )
}
export default Enrollment
