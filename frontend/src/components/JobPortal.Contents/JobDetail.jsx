import React from 'react'

// Shows the complete details of one job post.
const JobDetail = () => {
  return (
    <div className='bg-white h-full p-6 rounded-md max-w-[100%]'>
      <div style={{ border: '1px solid blue' }} className='flex justify-between pb-4'>
        <div className='flex gap-2'>
          <div>
            <img src='src/assets/company_logo.svg' className='w-16' />
          </div>
          <div>
            <div className='text-lg text-[#6C6C6C] font-medium'>ELITE LIMITED</div>
            <div className='text-xl font-bold'>Software Developer</div>
          </div>
        </div>
        <div>
          <img src='src/assets/bookmark.svg' />
        </div>
      </div>
      <div style={{ border: '1px solid blue' }} className='flex justify-between pb-4 text-[#6C6C6C] font-medium'>
        <div className='w-[70%]'>
          <div className='text-xl text-green-600 font-medium pb-2'>Job Descriptions</div>
          <p className='text-sm overflow-clip'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='flex flex-col items-end text-green-600'>
          <div>Bangalore Urban, Karnataka, India</div>
          <div><span className='font-bold'>Time Period:</span> 3 Months</div>
          <div><span className='font-bold'>Stipend:</span> 1 Lakhs/Month</div>
          <div><span className='font-bold'>Opportunity Type:</span> Internship</div>
          <div><span className='font-bold'>Deadline:</span> 30th Feb 2025</div>
          <div><span className='font-bold'>Experience:</span> Freshers</div>
        </div>
      </div>
      <div style={{ border: '1px solid blue' }} className='pb-4 text-[#6C6C6C] font-medium'>
        <div className='text-xl text-green-600 font-medium pb-3'>Skills</div>
        <div className='flex gap-4 text-xs'>
          <span className='py-2 px-3 bg-[#EFEFEF] rounded-md'>Ui Designer</span>
          <span className='py-2 px-3 bg-[#EFEFEF] rounded-md'>Figma</span>
          <span className='py-2 px-3 bg-[#EFEFEF] rounded-md'>Landing Page</span>
        </div>
      </div>
      <div style={{ border: '1px solid blue' }} className='flex justify-between text-[#6C6C6C] font-medium
      '>
        <div className='w-[70%]'>
          <div className='text-xl text-green-600 font-medium pb-3'>Requirements</div>
          <div className='text-sm'>
            <ul className='list-disc ml-4'>
              <li>Solid understanding of web development principles, including HTTP, RESTful APIs, and relational databases, particularly PostgreSQL.</li>
              <li>Proficiency in TypeScript and experience with the NestJS framework for building scalable and maintainable server-side applications.</li>
              <li>Familiarity with backend programming languages, particularly JavaScript (Node.js).</li>
              <li>Eagerness to learn about blockchain technology and smart contracts.</li>
              <li>Strong analytical and problem-solving skills with a keen interest in understanding system </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col text-center justify-center items-center bg-green-600 w-48 h-48 rounded-full mr-4 text-white'>
          <div className='text-5xl mb-1'>86.5%</div>
          <div className='leading-5'>Match Score<br></br> with your resume</div>
        </div>
      </div>
      <div style={{ border: '1px solid blue' }}></div>
    </div>
  )
}

export default JobDetail