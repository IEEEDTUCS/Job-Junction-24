import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[38.0625rem] h-[2.9375rem] rounded-md flex items-center text-xs bg-white text-gray-500'>
      <img src='src/assets/search.svg' alt="Search icon" className='ml-[1.5rem] mr-[0.5rem]' />
      Search for Opportunities
    </div>
  )
}

export default SearchBar