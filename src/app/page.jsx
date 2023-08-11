import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Maputo - Selfie Museum | Home"
}

export default function Home() {

  return (
    <>
    {/* <!-- Header Area Start --> */}
    <Header/>
    {/* <!-- Header Area End --> */}
    {/* <!-- ***** Welcome Area Start ***** --> */}
    <main className="w-full h-[90%] flex lg:flex-row flex-col items-center lg:justify-evenly justify-center lg:bg-[url(/newerBackground.jpg)] bg-cover bg-[position:center]">
      <section className='w-full lg:w-2/5 lg:h-2/3 h-full gap-3 flex relative items-center lg:justify-center flex-col lg:p-[8%] max-lg:pt-[30%] max-lg:pl-[8%] max-lg:pr-[8%]'>
          <h1 className='text-[26pt] text-white font-medium cursive'>Maputo Selfie Museum</h1>
          <hr className='border-white/30 border-2 w-1/3 self-start'/>
          <p className='text-white/90'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className='flex justify-between items-center w-full mt-5 lg:mt-0'>
            <button className='font-bold rounded-lg letter_spacing_1 h-10 w-[45%] bg-[linear-gradient(90deg,yellow,rgb(180,30,195))]'>
              <Link href="/marcacoes">
              Marcação
              </Link>
            </button>
            <button className='font-bold h-10 w-[45%] letter_spacing_1 bg-transparent border-b-white text-white border-b-2'>Dúvidas</button>
          </div>
      </section>
      <section className='w-full lg:w-2/5 max-lg:absolute max-lg:top-full max-lg:-translate-y-2/3 flex lg:justify-center lg:relative lg:h-full lg:p-24 p-2 h-60'>
          <ImageWrapper/>
      </section>
    </main>
    {/* <!-- ***** Welcome Area End ***** --> */}
    </>
)}

function ImageWrapper(){
  return(
    <div className='relative h-full w-full max-lg:overflow-clip'>
      <img className='max-lg:h-full max-lg:w-2/3 max-lg:hover:scale-105 hover:z-50 rounded-xl shadow-2xl hover:scale-125 transition-transform shadow-black h-4/5 w-[90%] object-cover absolute top-1/2 left-2/12 -translate-x-1/4 -translate-y-2/4 border-white border-8 moving-image-1' src="/imagem/1.jpeg" alt="" />
      <img className='max-lg:h-full max-lg:w-2/3 max-lg:hover:scale-105 hover:z-50 rounded-xl shadow-2xl hover:scale-125 transition-transform shadow-black h-1/3 w-1/2 object-cover absolute top-[5%] left-[90%] -translate-x-3/4 -translate-y-[5%] rotate-6 border-white border-8 moving-image-2' src="/imagem/4.jpeg" alt="" />
      <img className='max-lg:h-full max-lg:w-2/3 max-lg:hover:scale-105 hover:z-50 rounded-xl shadow-2xl hover:scale-125 transition-transform shadow-black h-1/2 w-1/2 object-cover absolute top-[90%] left-[80%] -translate-x-[80%] -translate-y-[90%] border-white border-8 moving-image-3' src="/imagem/2.jpeg" alt="" />
      <img className='max-lg:h-full max-lg:w-2/3 max-lg:hover:scale-105 max-lg:hover:left-1/2 hover:z-50 rounded-xl shadow-2xl hover:scale-125 transition-transform shadow-black z-30 h-1/3 w-1/2 object-cover absolute top-full left-0 -rotate-3 -translate-x-[80%] -translate-y-full border-white border-8 moving-image-4' src="/imagem/5.jpeg" alt="" />
    </div>
  )
}