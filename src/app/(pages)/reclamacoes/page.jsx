import React from 'react'

function page() {
  return (
    <section className="about-me-area mt-100 section_padding_100">
        <div className="container flex gap-20 justify-center w-full">
            <div className='flex flex-col w-2/5'>
                <label htmlFor="">Nome:</label>
                <input type="email"className="border-black border-2" name="" id="" />

                <label htmlFor="">Email</label>
                <input type="email" className="border-black border-2"/>
            </div>
            <div className='flex flex-col w-2/5'>
                <label htmlFor="">Reclamação</label>
                <textarea name=""  className="border-black border-2 w-full"id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    </section>
  )
}

export default page