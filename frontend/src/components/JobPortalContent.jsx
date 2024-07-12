import React from 'react'
import Filters from './JobPortal.Contents/Filters'
import SearchBar from './JobPortal.Contents/SearchBar'
import UploadResume from './JobPortal.Contents/UploadResume'
import JobList from './JobPortal.Contents/JobList'
import JobDetail from './JobPortal.Contents/JobDetail'

const JobPortalContent = () => {
  return (
    <div className='bg-gray-100 py-3 pl-3'>
      <div className="flex">
        <Filters />
        <SearchBar />
        <UploadResume />
      </div>
      <div className="flex">
        <JobList />
        <JobDetail />
      </div>
    </div>
  )
}

export default JobPortalContent