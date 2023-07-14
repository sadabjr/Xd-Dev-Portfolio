import React from 'react';
import './style.css'

const Project_card = ({img, langs, title, disc}) => {
  return (
   <>
   <div className='border mx-auto w-[90%] md:[48%] lg:w-[30%] border-[#abb2bf] p-0' >
    {/* image */}
    <div className=''>
        <img className='w-full' src={img} alt="" />
    </div>
    {/* skills */}
    <div className='flex flex-wrap gap-2 p-2 border-y border-[#abb2bf]'>
        {langs.map((e) => {
            return <span className='text-[#abb2bf]'>{e}</span>
        })}
    </div>
    {/* disc */}
    <div className='p-4'>
        <h2 className='text-[#ffffff] pb-4 text-2xl'>{title}</h2>
        <p className='py-4 text-[#abb2bf]'>{disc}</p>
        {/* buttons */}
        <div className='flex justify-between'>
        <button className='py-4 px-4 text-white border border-[#c778dd] hover:bg-[#c778dd33] duration-150'>
            Live {"<"}~{">"}
        </button>
        <button className='py-4 px-4 text-white border border-[#c778dd] hover:bg-[#c778dd33] duration-150'>
            close {"<"}~{">"}
        </button>
        </div>
    </div>
   </div>
   </>
  )
}

export default Project_card