import React from 'react'

const Filters = () => {
  return (
    <div className="flex justify-between items-center w-[24.625rem] h-[2.9375rem] rounded-md text-xs bg-white">
      <div className='flex items-center ml-[0.45rem]'>
        <div className='h-[2.125rem] w-[7.5625rem] bg-green-600 text-white rounded-md flex items-center justify-center'>Best Matches</div>
        <div className='ml-[0.94rem] text-gray-500'>Most Recent</div>
      </div>
      <div className='flex text-gray-500 mr-[0.45rem]'>
        <div>Filters</div>
        <img alt='menu icon' src='src/assets/menu.svg' className='ml-[0.31rem]' />
      </div>
    </div>
  )
}

export default Filters