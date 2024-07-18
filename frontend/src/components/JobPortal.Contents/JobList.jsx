import React from 'react'


// List of job posts
const JobList = () => {
  return (
    <div style={{ border: '1px solid red' }} className='p-1 bg-white text-green-600 rounded-md'>
      <div className='flex'>
        <img src='src/assets/company_logo.svg' />
        <div>
          <span className='font-bold'>Software Developer</span>
          <span>{'3 days'} ago</span>
          <p className='font-semibold'>We are looking for figma designers who can help desiging the entire mobile application ...</p>
        </div>
        <img src='src/assets/bookmark.svg' />
      </div>
      <div className='flex gap-1'>
        <span className='text-[#656565] bg-[#EFEFEF] rounded-md p-1'>Ui Designer</span>
        <span className='text-[#656565] bg-[#EFEFEF] rounded-md p-1'>Ui Designer</span>
        <span className='text-[#656565] bg-[#EFEFEF] rounded-md p-1'>Ui Designer</span>
      </div>
      <div className='flex justify-between'>
        <span><span className='font-medium'>Deadline:</span> {'10th Feb 2025'}</span>
        <span><span className='font-medium'>Applied:</span> {'1000'}</span>
        <img src='src/assets/platform.svg' />
      </div>
    </div>
  )
}

export default JobList