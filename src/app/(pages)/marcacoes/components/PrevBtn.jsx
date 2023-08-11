import React from 'react'

function PrevBtn({step}) {
  return (
    <span className='absolute left-[2%] top-[0%] flex items-center justify-center -translate-x-[2%] text-orange-600 h-fit text-[36pt]' onClick={()=>{
        console.log("clicked?")
        step(prev=> {
            if(prev === 0){
                window.location.replace("/")
            }
            return prev - 1
        })
    }}>&lt;</span>
  )
}

export default PrevBtn