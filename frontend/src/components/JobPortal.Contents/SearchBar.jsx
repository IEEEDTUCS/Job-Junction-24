import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center grow gap-4 text-xs bg-white text-gray-500 rounded-md px-6 h-full'>
      <img src='src/assets/search.svg' alt="Search icon" className='' />
      Search for Opportunities
    </div>
  )
}

export default SearchBar