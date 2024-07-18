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
    <div className='bg-gray-100 p-3 flex justify-around' style={{ border: '1px solid black' }}>
      <div className='flex flex-col w-1/3' style={{ border: '1px solid blue' }}>

        <div style={{ border: "1px solid red" }}>
          <Filters className='grow' />
        </div>

        <div style={{ border: "1px solid red" }}>
          <JobList className='grow' />
        </div>

      </div>
      <div className='flex flex-col w-7/12' style={{ border: '1px solid blue' }}>
        <div className='flex justify-between'>

          <div style={{ border: "1px solid red" }}>
            <SearchBar />
          </div>

          <div style={{ border: "1px solid red" }}>
            <UploadResume />
          </div>

        </div>

        <div style={{ border: "1px solid red" }}>
          <JobDetail />
        </div>

      </div>
    </div>
  )
}

export default JobPortalContent