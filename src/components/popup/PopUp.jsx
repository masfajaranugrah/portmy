import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const PopUp = ({setOpen}) => {
  return (
    <section className='fixed z-[9999] halo ' >
         <div className='relative lg:right-[-66rem] right-[-16rem] text-white text-[40px] z-[999999] -top-[22rem] lg:-top-[15rem] '>
            <AiOutlineCloseCircle onClick={() => setOpen(false)}/></div>
        <div className='halo1'>
        </div>
        
        <div className='absolute dark-blur rounded-lg lg:-top-[16rem] -top-[24.5rem] -left-10 lg:left-[-5rem]
         flex justify-center items-center lg:w-[75rem] w-[25rem] h-screen bg-white/30 backdrop-blur'>
           <div className='flex justify-center items-center gap-y-4'>
            <ul className='text-center font-semibold'>
                <li className='text-[50px] '><a href="#">Email</a></li>
                <li className='text-[50px]'><a href="#">Whatsapp</a></li>
                <li className='text-[50px]'><a href="#">Facebook</a></li>
                <li  className='text-[50px]'><a href="#">Linkedin</a></li>
            </ul>
           </div>
        </div>
    </section>
  )
}

export default PopUp
