import React from 'react'
import JobPortalContent from '../components/JobPortalContent'
import Navbar from '../components/Navbar'


// This page is divided into NavBar and JobPortalContent

const JobPortal = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <JobPortalContent />
    </div>
  )
}

export default JobPortal