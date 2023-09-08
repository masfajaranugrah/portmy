import React from 'react'

const SkillCard = (props) => {
    const {icons} = props.item
  return (
    <div className='gra rounded-full my-2 px-4 py-4 hover:-top-5 transition hover:transition relative text-[40px]'>
        {icons}
    </div>
  )
}

export default SkillCard
