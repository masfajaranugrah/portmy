import React from 'react'

const Menulink = () => {
  return (
    <div className='text-[20px] cursor-pointer pointer-events-auto '>
        <ul className='flex gap-x-5'>
            <li><a href="/">Home</a> </li>
            <li ><a href="#about">About</a> </li>
            <li><a href="#work">Work </a></li>
            <li><a href="#testimonials">Tertimonails</a> </li>
        </ul>
    </div>
  )
}

export default Menulink
