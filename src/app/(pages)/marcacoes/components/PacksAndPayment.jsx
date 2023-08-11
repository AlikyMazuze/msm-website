"use client"
import React, { useEffect, useRef, useState } from 'react'

function PacksAndPayment({setShowModal, setPaymentMethod, setMarcacao, status, message,setShowMessageDialog}) {
    const [selectedPack, setSelectedPack] = useState(null);
    

    function seletectPayment(e){
        if(!selectedPack){
            status(false)
            message("Selecione um pacote")
            setShowMessageDialog(true);
            return
        }
        setShowModal(true)
        setPaymentMethod(e)
    }
    
    function setPack(e){
        const children = [... document.querySelector("#packsContainer").children]
        children.forEach(child=>{
            child.classList.remove("scale-110")
            child.classList.remove("shadow-violet-500")
        })
        console.log(e.target)
        setSelectedPack(e.target.id)
        setMarcacao(prev=>{
            e.target.classList.add("scale-110")
            e.target.classList.add("shadow-violet-500")
            prev.pacote = e.target.id;
            return prev;
        })
    }
        
   
  return (
    <>
        
        <div className='hover:shadow-violet-500 w-full h-1/2 flex flex-col justify-center p-3'>
            <h1 className='text-center text-[18pt] font-bold'>Pacotes</h1>
            <div className='w-full h-full flex items-center justify-between' id="packsContainer">
                <div className='w-[30%] shadow-xl transition-all rounded-lg h-4/5 bg-red-500'  onClick={(e)=>{
                    setPack(e)
                }} id="1">
                    <span>1</span>
                </div>
                <div className='w-[30%] shadow-xl transition-all rounded-lg h-4/5 bg-blue-500'  onClick={(e)=>{
                    setPack(e)
                }} id="2">
                    <span>2</span>
                </div>
                <div className='w-[30%] shadow-xl transition-all rounded-lg h-4/5 bg-green-500'  onClick={(e)=>{
                    setPack(e)
                }} id="3"> 
                    <span>3</span>
                </div>
            </div>
        </div>
        <div className='hover:shadow-violet-500 w-full h-1/2 flex flex-col justify-center p-3'>
            <h1 className='text-center text-[18pt] font-bold'>Métodos de Pagamento</h1>
            <div className='w-full h-full flex justify-between items-center'>
                <div className='w-[40%] h-4/5 flex items-center flex-col rounded-lg' onClick={()=>{
                    seletectPayment(1)
                }}>
                    <img className='w-full h-[90%] object-contain rounded-lg' src="/mpesa.png" alt="MPESA"/>
                    <p>M-PESA</p>
                </div>
                <div className='w-[40%] h-4/5 flex items-center flex-col rounded-lg' onClick={()=>{
                    seletectPayment(2)
                }}>
                    <img className='w-full h-[90%] object-contain rounded-lg' src="/emola.png" alt="EMOLA"/>
                    <p>E-MOLA</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default PacksAndPayment