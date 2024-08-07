import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-12 h-[100px] sticky top-0 bg-white'>
            <div>
                <img src='src/assets/job_recom_logo.png' />
            </div>
            <div className='flex gap-6 text-lg font-semibold items-center'>
                <div className='hover:text-green-600 hover:border-b-2 hover:border-green-600 hover:transition'>All Jobs</div>
                <div className='hover:text-green-600 hover:border-b-2 hover:border-green-600 hover:transition'>Internship</div>
                <div className='hover:text-green-600 hover:border-b-2 hover:border-green-600 hover:transition'>Full Time</div>
                <div className='hover:text-green-600 hover:border-b-2 hover:border-green-600 hover:transition'>Part Time</div>
                <div className='hover:text-green-600 hover:border-b-2 hover:border-green-600 hover:transition'>Freelance</div>
            </div>
            <div className='flex gap-6 '>
                <button><img src='src/assets/bell_icon.svg'/></button>
                <button><img src='src/assets/bookmark.svg'/></button>
                <button><img src='src/assets/mail_icon.svg'/></button>
                <button><img src='src/assets/pp.jpg' className='rounded-full'/></button>
            </div>
        </div>
    )
}

export default Navbar