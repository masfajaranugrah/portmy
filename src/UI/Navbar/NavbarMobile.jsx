import React from 'react'
import {AiOutlineHome, AiOutlineMessage} from 'react-icons/ai'
import {MdWork, MdPeopleAlt} from 'react-icons/md'
import {FaNetworkWired} from 'react-icons/fa'
const NavbarMobile = () => {
  return (
    <section className=' fixed  lg:hidden z-[9999] text-[40px]  w-full'>
         <div className='text-white absolute flex -bottom-[50rem]  w-full justify-center   '>
            <div className='bg-violet-900 flex justify-center items-center w-[22rem] rounded-full'>
            <ul className='flex gap-x-8 py-4'>
                <li ><a href="#"><AiOutlineHome/></a></li>
                <li><a href="#skill"><FaNetworkWired/></a></li>
                <li><a href="#about"><MdPeopleAlt/></a></li>
                <li><a href="#work"><MdWork/></a></li>
                <li><a href="#testimonials"><AiOutlineMessage/></a></li>
            </ul>
            </div>
           
    </div>
    </section>
   
  )
}

export default NavbarMobile
