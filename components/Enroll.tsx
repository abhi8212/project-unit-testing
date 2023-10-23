import Link from 'next/link'
import React from 'react'
const Enroll = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center pl-11 m-6">
        <div className="lg:w-3/4 lg:mr-4">
          <h2 className="text-2xl font-bold">How To Let Your Child Study At Kindori?</h2>
          <p className="mt-2">Let your child attend Kindori Kindergarten to help your child develop comprehensively in all aspects.</p>
        </div>
        <Link href={'/'}>
        <button className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 rounded-full mt-4">
          Enrollment Now
        </button>
        </Link>
      </div>
    </div>
  )
}
export default Enroll
