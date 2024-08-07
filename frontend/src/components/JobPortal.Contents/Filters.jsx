import React from 'react'

const Filters = () => {
  return (
      <div className="flex justify-between items-center text-sm p-2 bg-white rounded-md">
        <div className='flex items-center ml-[0.45rem]'>
          <button className='bg-green-600 text-white rounded-md py-2 px-4'>Best Matches</button>
          <div className='text-gray-500 py-2 px-4'>Most Recent</div>
        </div>
        <div className='flex text-gray-500 mr-[0.45rem]'>
          <div>Filters</div>
          <img alt='menu icon' src='src/assets/menu.svg' className='ml-[0.31rem]' />
        </div>
      </div>
  )
}

export default Filters