import React from 'react'

const Banner = () => {
  return (
    <div className="w-full relative h-[80vh]">
        <video 
            className="w-full h-full object-cover"
            src="https://booksy-public.s3.amazonaws.com/horizontal_.webm" autoPlay muted autoFocus
        />
        <div className="textPart absolute flex flex-col items-center justify-center inset-0 text-white z-20 space-y-3 px-5">
            <h1 className="text-5xl font-bold">Be your self</h1>
            <p className="text-slate-400 text-2xl text-center font-semibold">Discover your unique beauty</p>
            <input 
                type="text" placeholder="Search for services, salons, or professionals..." 
                className="md:w-[33rem] px-5 py-4 w-[15rem] rounded-md bg-white text-black outline-none border-none" 
            />
        </div>
    </div>
  )
}

export default Banner