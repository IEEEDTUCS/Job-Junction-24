import React from 'react'
import Filters from './JobPortal.Contents/Filters'
import SearchBar from './JobPortal.Contents/SearchBar'
import UploadResume from './JobPortal.Contents/UploadResume'
import JobList from './JobPortal.Contents/JobList'
import JobDetail from './JobPortal.Contents/JobDetail'

// JobPortalContent includes all the components making up this part of page.
// You can find all the components this part is broken down in imports

const JobPortalContent = () => {
  return (
    <div className='bg-gray-100 p-6 flex gap-8 border-box h-[90%]'>
      <div className='flex flex-col w-1/3'>
        <div className='mb-8'>
          <Filters />
        </div>
        <JobList />
      </div>
      <div className='flex flex-col grow'>
        <div className='flex items-center justify-between gap-8 mb-8'>
          <SearchBar />
          <UploadResume />
        </div>
        <JobDetail />
      </div>
    </div>
  )
}

export default JobPortalContent