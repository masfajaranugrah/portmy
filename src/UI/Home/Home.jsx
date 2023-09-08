import React, { useState } from 'react'
import { ImgHome } from '../../assets'
import { PopUp,  WorkCard } from '../../components'
import {TbSunFilled, TbSunOff} from 'react-icons/tb'
import {SkillCard} from '../../components'
import {Myskills} from '../../data/data'
import {Work} from '../../data/data'
import {FiShare}  from 'react-icons/fi'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { CardAnimate } from '../../animation'


const Home = () => {
  const [toggel, setToggle] = useState(false)

  const onToggle = () => {
      setToggle(!toggel)
  }

  const [open, setOpen] = useState(false)
  const PopupActive = () => {
    setOpen(!open)
    console.log('halo')
}

  return (
   
    <section className={`gra  text-white ${toggel && 'dark' }`}>
       
      <div className='flex justify-center items-center '>
        <div className='fixed z-[9999]  top-5 right-20'>
           <div className='text-white  absolute text-[40px] cursor-pointer ' onClick={(() => onToggle())}>
      {
        toggel ? <TbSunOff className='text-black'/> : <TbSunFilled/>
      }
      </div>
        </div>
       
        <div className='h-[100vh] w-[80%]  flex justify-center items-center'>
          <div className='flex justify-between items-center'>
                        {/* left   */}
            <div className='flex-1'>
              <h1 className='lg:text-[200px] text-[7rem] tema-text font-bold'>
             Halo
              </h1>
              <h2 className='text-[30px] font-semibold mb-10'>I Am Fajar anugrah</h2>
              <p className='text-[20px] sans '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet quo, fugit nostrum dolor necessitatibus quisquam ipsam repudiandae et sapiente magni est beatae quis! Eaque illo ratione quidem ex labore.</p>
              <button className=' flex justify-center items-center gap-x-2 btn-bg border border-violet-900 text-white text-[20px] rounded-xl 
              mt-10 px-4 py-2' onClick={(() => PopupActive())}>Contact me <FiShare/></button>
            </div>
        {open && <PopUp setOpen={setOpen}/>}
            <div className='flex-1 lg:block hidden rounded-[20px]'>
             <img src={ImgHome} alt=""  /> 
            </div>
          </div>

        </div>
      </div>
      




        {/* Skil  */}


        <div id='skill' className={` text-white h-[20rem] py-10 ${toggel && 'dark'}`}>
          <div className='text-center'>
        <h2 className='text-[30px] font-bold'>My Skill</h2>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-x-5 mt-10'>
          {
            Myskills.map((item) => (
                <SkillCard key={item} item={item}/>
            ))
          }
      </div>
    </div>



        {/* About  */}


    <div id='about' className={` flex w-[100%] justify-center items-center text-white ${toggel && 'dark'} `}>
    <div className='h-[100vh] w-[80%]  flex justify-center items-center'>
      <div className='flex justify-between items-center'>

{/* left  */}
      <div className='flex-1 lg:block hidden rounded-[20px]'>
         <img src={ImgHome} alt=""  /> 
        </div>
        
        
        {/* right   */}
        <div className='flex-1'>
          <h1 className='text-[40px] font-bold text-abt'>About</h1>
          <p className='text-[20px] sans '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eveniet quo, fugit nostrum dolor necessitatibus quisquam ipsam repudiandae et sapiente magni est beatae quis! Eaque illo ratione quidem ex labore.</p>
          <button className=' flex justify-center items-center gap-x-2 btn-bg border border-violet-900 text-white text-[20px] rounded-xl 
              mt-10 px-4 py-2' onClick={(() => PopupActive())}>Contact me <FiShare/></button>
        </div>

        
      </div>

    </div>
</div>
    



{/* work  */}

<div id='work' className={` text py-20 ${toggel && 'dark'}`}>
  <div>
          <h2 className='text-center text-[40px] font-bold'>Work</h2>
  </div>
  <div className='flex flex-wrap justify-center items-center rounded-lg '>
      {
        Work.map((item) => (
          <WorkCard key={item} item={item} />
        ))
      }
  </div>
</div>





{/* testimonails  */}
<section id='testimonials' className='py-20'>
  <h1 className='text-center text-[40px] mb-20'>Testimonials</h1>
  <div className=' container mx-auto flex justify-center'>
    
  <div className='relative flex flex-wrap justify-center mx-20'>
    {/* left */}
    <div className='flex-1 w-[20rem]'>
    <h1 className='text-[20px] mb-10'>My Testimonial Project</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio, velit iusto voluptatem perspiciatis sunt ut vero debitis incidunt quaerat reiciendis unde, harum quae facere praesentium facilis ea officia amet?</p>
    </div>

    {/* right  */}
    <div className='lg:w-[30rem] w-[20rem] text'>
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardAnimate/>
        </SwiperSlide>
        <SwiperSlide>
          <CardAnimate/>
        </SwiperSlide>
        <SwiperSlide>
          <CardAnimate/>
        </SwiperSlide>
        <SwiperSlide>
          <CardAnimate/>
        </SwiperSlide>
        
      </Swiper>
    </div>
  

      </div>
  </div>

  
</section>


 
    </section>
  )
}

export default Home
