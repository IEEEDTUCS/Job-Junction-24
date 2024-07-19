import React from 'react'


// List of job posts
const JobList = () => {
  return (
    <div className='p-5 bg-white text-green-600 rounded-md border-2 border-green-600'>
      <div className='flex items-start pb-4'>
        <img src='src/assets/company_logo.svg' className='w-32'/>
        <div className='px-4'>
          <div className='flex justify-between'>
            <span className='font-bold text-xl'>Software Developer</span>
            <span className='font-normal'>{'3 days'} ago</span>
          </div>
          <p className='font-medium'>We are looking for figma designers who can help desiging the entire mobile application...</p>
        </div>
        <img src='src/assets/bookmark.svg' className='w-12'/>
      </div>
      <div className='flex gap-4'>
        <span className='text-[#656565] bg-[#EFEFEF] rounded-md py-2 px-3 text-xs'>{'Ui Designer'}</span>
        <span className='text-[#656565] bg-[#EFEFEF] rounded-md py-2 px-3 text-xs'>{'Figma'}</span>
        <span className='text-[#656565] bg-[#EFEFEF] rounded-md py-2 px-3 text-xs'>{'Landing Page'}</span>
      </div>
      <div className='flex justify-between items-end'>
        <div className='flex gap-8'>
          <span><span className='font-medium'>Deadline:</span> {'10th Feb 2025'}</span>
          <span><span className='font-medium'>Applied:</span> {'1000'}</span>
        </div>
        <img src='src/assets/platform.svg' className='w-12'/>
      </div>
    </div>
  )
}

export default JobList