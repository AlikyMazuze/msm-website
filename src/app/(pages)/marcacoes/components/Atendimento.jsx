"use client"
import React, { useRef } from 'react'

function Atendimento({step, setMarcacao, status, message,setShowMessageDialog}) {
    const dia = useRef()
    function setSelected(e){
        if(!dia.current.value ){
            status(false)
            message("Selecione a data")
            setShowMessageDialog(true);
            return
        }
        step(prevStep => prevStep + 1)
        setMarcacao(prev=>{
            prev.horario = {
                e,
                dia: dia.current.value
            };
            return prev;
        })
    }
  return (
    <>
            <div className='w-full h-[35%] flex flex-col items-center relative'>
                <div className='h-1/3 w-full'><img src="/img/core-img/logo png.png" alt="" className='h-full w-full object-contain'/></div>
                <p className='text-[rgb(30,30,30)] dark:text-slate-50 mt-3 font-semibold letter_spacing_half'>Escolha o seu atendimento</p>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className="mb-2">
                    <label htmlFor="dia" className='font-bold text-[14pt] mr-2'>Selecione o dia:</label>
                    <input type="date" name="" id="dia" ref={dia} className='outline-none bg-transparent' />
                </div>
                <table className='w-full h-full text-center border-collapse border-t-[1px] border-[rgb(30,30,30)] border-t-[rgb(200,200,200)]'>
                    <thead>
                    <tr className='border-[rgb(30,30,30)]'>
                        <th className='font-bold text-[14pt]'>Manhã</th>
                        <th className='font-bold text-[14pt]'>Tarde</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className='font-medium border-[rgb(200,200,200)]'>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(100)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>8:00 - 9:30 </span><span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div> 
                        </td>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(200)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>13:00 -14:00</span>  <span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div> 
                        </td>
                    </tr>
                    <tr className='font-medium border-[rgb(30,30,30)]'>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(101)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>9:30 - 10:30 </span> <span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div> 
                        </td>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(201)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>14:00 - 15:00</span>  <span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div> 
                        </td>
                    </tr>
                    <tr className='font-medium border-[rgb(200,200,200)]'>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(102)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>10:30 - 11:30</span>  <span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div> 
                        </td>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(202)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>15:00 - 16:00</span>  <span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div> 
                        </td>
                    </tr>
                    <tr className='font-medium border-[rgb(30,30,30)]'>
                        <td> 
                            <div>
                            
                            </div>
                        </td>
                        <td className='cursor-pointer hover:bg-yellow-500 transition-colors' onClick={()=>{
                                setSelected(203)
                            }}> 
                            <div className='flex items-center justify-around lg:justify-center relative'>
                                <span>16:00 - 17:30</span>  <span className='absolute left-full flex items-center justify-center top-1/2 -translate-x-full -translate-y-1/2 text-orange-600 h-full text-[20pt]'>&gt;</span>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
    </>
  )
}

export default Atendimento