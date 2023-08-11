"use client"
import React from 'react'

function NextBtn({step, isAllowed}) {

  return (
    <button className='font-bold rounded-lg letter_spacing_1 h-10 text-white w-[65%] bg-[linear-gradient(90deg,yellow,rgb(180,30,195))] mt-5' type='button' onClick={()=>{
        if(isAllowed()){
            step(prev=> prev + 1)
        }
    }}>Próximo</button>
    )
}

export default NextBtn