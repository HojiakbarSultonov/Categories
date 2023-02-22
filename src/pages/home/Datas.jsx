import React from 'react'

function Datas({image, title, category}) {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-500 p-4'>
        <img className='h-80' src={image} alt="" />
        <h2>{title}</h2>
        <h2>{category}</h2>
    </div>
  )
}

export default Datas