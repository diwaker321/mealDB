import React from 'react'

const Categorycard = (category) => {
    // console.log('category: ', category?.category);
    const {strCategory , strCategoryThumb} = category?.category
  return (
    <div className=' rounded-2xl bg-gray-100 p-3 cursor-pointer hover:shadow-md transition-all duration-150 ease-linear'>
    <img src={strCategoryThumb} className='w-70' alt="" />
    <h1 className='text-center text-2xl font-bold p-2'>{strCategory}</h1>
    </div>
  )
}

export default Categorycard
