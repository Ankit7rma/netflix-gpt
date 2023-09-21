import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%]  flex justify-center'>
    <form className='w-1/2 bg-black grid grid-cols-12'> 
        <input className='col-span-9 p-4 m-4 rounded-lg' placeholder='What would you want to watch?'/>
        <button className='col-span-3 bg-red-600 py-2 px-4 m-4 rounded-lg'>Search</button>
    </form>
    </div>
  )
}

export default GptSearchBar