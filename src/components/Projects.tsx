import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-2xl text-white'><span className='tracking-[20px]'>project</span>s</h3>

        <div className='w-full absolute top-[30%] bg-[#FB923C]/20 left-0 h-[400px] -skew-y-12'>

        </div>

    </div>
    
  )
}

export default Projects