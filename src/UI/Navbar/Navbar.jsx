import React from 'react'
import { Menulink } from '../../components'

const Navbar = () => {
  return (
    <section className='fixed'>
<div className='w-[43.5rem] top-[19.7rem] -left-[20rem] relative bg-[#0d1116] text-white rotate-[-90deg] h-[4rem]'>
        <nav className='container mx-auto px-7 py-5 flex justify-center'>
           
                <Menulink/>
              
        </nav>
    </div>
    </section>
   
  )
}

export default Navbar
