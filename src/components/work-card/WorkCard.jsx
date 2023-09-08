import React from 'react'
import {Link} from 'react-router-dom'

const WorkCard = (props) => {
    const {img, title, desc, pages, linkpages, github, linkgithub} = props.item
  return (
    <section className='gra2 border lg:my-20 my-5 border-white px-4 py-8 relative mx-2 rounded-lg'>
        <div className='text-[20px] font-semibold'>{title}</div>
            <hr/>
        <div className='mt-10'>
            <img src={img} alt="" className='rounded-lg' />
        </div>
        <div className='flex justify-between mt-5 items-center'>
            <div >
               <p className='text-[20px] w-[10rem] font-semibold '>{desc}</p> 
                </div>
            <div className='flex gap-x-4 text-[30px]'>
            <a href={linkpages}><p className=''>{pages}</p></a> 
            <a href={linkgithub}><p>{github}</p></a>
            
            </div>
        </div>
    </section>
  )
}

export default WorkCard
