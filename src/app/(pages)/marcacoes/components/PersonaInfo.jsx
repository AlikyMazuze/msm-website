"use client"
import React, { useRef, useState } from 'react'
import NextBtn from './NextBtn'
import useRegex from '@/hooks/useRegex'

function PersonaInfo({step, setMarcacao, status, message,setShowMessageDialog}) {
    const nome = useRef()
    const email = useRef()
    const tel = useRef();

    function showMessageDialog(stt, msg){
        status(stt)
        message(msg)
        setShowMessageDialog(true);
    }
    
    function isAllowedState(){
        nome.current.classList.remove("border-b-red-500")
        email.current.classList.remove("border-b-red-500")
        tel.current.classList.remove("border-b-red-500")

        nome.current.classList.remove("dark:border-b-red-500")
        email.current.classList.remove("dark:border-b-red-500")
        tel.current.classList.remove("dark:border-b-red-500")

        if(nome.current.value == "" || !useRegex("nome",nome.current.value)){
            //
            nome.current.classList.add("border-b-red-500")
            nome.current.classList.add("dark:border-b-red-500")
            showMessageDialog(false, "Verifique o nome")
            return false

        }else if(email.current.value == "" || !useRegex("email",email.current.value)){
            //
            email.current.classList.add("border-b-red-500")
            email.current.classList.add("dark:border-b-red-500")
            showMessageDialog(false, "Verifique o email")
            return false
        }else if(tel.current.value == "" || !useRegex("telefone",tel.current.value) ){
            //
            tel.current.classList.add("border-b-red-500")
            tel.current.classList.add("dark:border-b-red-500")
            showMessageDialog(false, "Verifique seu número de celular")
            return false
        }else{
            setMarcacao(prev=>{
                prev.nome = nome.current.value;
                prev.email = email.current.value;
                prev.telefone = tel.current.value;
                return prev;
            })
            console.log("comooooo")
            return true
        }
    }
  return (
    <>
        <div className='w-full h-[20%] flex flex-col items-center relative'>
            <div className='h-1/3 w-full'><img src="/img/core-img/logo png.png" alt="" className='h-full w-full object-contain'/></div>
            <p className='text-[rgb(30,30,30)] dark:text-slate-50 mt-6 font-semibold letter_spacing_half max-lg:text-center'>Agora vamos recolher algumas sobre si</p>
        </div>
        <div className='w-full h-full flex flex-col justify-between items-center p-8'>
            <div className='flex flex-col items-center justify-around w-full lg:h-[30%] h-[20%]'>
                <label className='font-bold' htmlFor="">Nome:</label>
                <input className='border-b-[rgb(30,30,30)] dark:border-b-slate-50 border-b-2 bg-transparent w-1/2 h-1/2 outline-none max-lg:w-[80%] text-center text-[14pt]' type="text" ref={nome}/>
            </div>
            <div className='flex flex-col items-center justify-around w-full lg:h-[30%] h-[20%]'>
                <label className='font-bold' htmlFor="">Email:</label>
                <input className='border-b-[rgb(30,30,30)] dark:border-b-slate-50 border-b-2 bg-transparent w-1/2 h-1/2 outline-none max-lg:w-[80%] text-center text-[14pt]' type="email" ref={email}/>
            </div>
            <div className='flex flex-col items-center justify-around w-full lg:h-[30%] h-[20%]'>
                <label className='font-bold' htmlFor="">Telefone</label>
                <input className='border-b-[rgb(30,30,30)] dark:border-b-slate-50 border-b-2 bg-transparent w-1/2 h-1/2 outline-none max-lg:w-[80%] text-center text-[14pt]' type="text" ref={tel}/>
            </div>
            <NextBtn step={step} isAllowed={isAllowedState}/>
        </div>
    </>
  )
}

export default PersonaInfo