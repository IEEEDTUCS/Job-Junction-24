import React from 'react'

const Filters = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className="flex justify-between items-center text-xs p-2">
        <div className='flex items-center ml-[0.45rem]'>
          <button className='bg-green-600 text-white rounded-md p-2'>Best Matches</button>
          <div className='ml-[0.94rem] text-gray-500'>Most Recent</div>
        </div>
        <div className='flex text-gray-500 mr-[0.45rem]'>
          <div>Filters</div>
          <img alt='menu icon' src='src/assets/menu.svg' className='ml-[0.31rem]' />
        </div>
      </div>
    </div>
  )
}

export default Filters