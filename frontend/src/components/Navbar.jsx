import React from 'react'

const Navbar = () => {


    function turnGreen(e){
        e.target.classList.add("transition")
        e.target.classList.add("text-green-600")
        e.target.classList.add("border-b-2")
        e.target.classList.add("border-green-600")
    }

    function turnBlack(e){
        e.target.classList.remove("transition")
        e.target.classList.remove("text-green-600")
        e.target.classList.remove("border-b-2")
        e.target.classList.remove("border-green-600")
    }


    return (
        <div className='flex justify-between items-center px-12 h-[100px] sticky top-0 bg-white'>
            <div>
                <img src='src/assets/job_recom_logo.png' />
            </div>
            <div className='flex gap-6 text-lg font-semibold items-center'>
                <div onMouseEnter={turnGreen} onMouseLeave={turnBlack}>All Jobs</div>
                <div onMouseEnter={turnGreen} onMouseLeave={turnBlack}>Internship</div>
                <div onMouseEnter={turnGreen} onMouseLeave={turnBlack}>Full Time</div>
                <div onMouseEnter={turnGreen} onMouseLeave={turnBlack}>Part Time</div>
                <div onMouseEnter={turnGreen} onMouseLeave={turnBlack}>Freelance</div>
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