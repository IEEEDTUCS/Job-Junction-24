import React from 'react'
import JobPortalContent from '../components/JobPortalContent'


// This page is divided into NavBar and JobPortalContent

const JobPortal = () => {
  return (
    <div>
      <div>NavBar</div> {/* NavBar component comes here */}
      <JobPortalContent className='box-border'/>
    </div>
  )
}

export default JobPortal