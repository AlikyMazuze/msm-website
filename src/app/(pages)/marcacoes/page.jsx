"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Atendimento from './components/Atendimento'
import PersonaInfo from './components/PersonaInfo'
import PacksAndPayment from './components/PacksAndPayment';
import PrevBtn from './components/PrevBtn';

export default function page() {
    const [step, setStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [processingTransaction, setPrecessingState] = useState(false)
    // popup messages
    const [showMessageDialog, setShowMessageDialog] = useState(false);
    const [messageStatus, setMessageStatus] = useState()
    const [messageBody, setMessageBody] = useState();
    //To server object
    const [marcacao, setMarcacao] = useState({
        horario:{},
        nome:"",
        email: "",
        telefone: "",
        pacote: "",
        pagamento:""
    })
    useEffect(()=>{
        if(step > 2){
            setStep(0)
        }else if(step < 0){
            setStep(0)
        }
    },[step])

    
  return (
    <>  
        {showMessageDialog && <MessageDialog status={messageStatus} message={messageBody} setShowMessageDialog={setShowMessageDialog}/>}
        {processingTransaction && <>
            <div className='h-full w-full absolute bg-black/30 z-40 top-0 left-0 rounded-md'/>
            <div className='absolute top-1/2 left-1/2 loading-spinner z-50'/>
        </>}
        {showModal && <>
            <div className='h-full w-full absolute bg-black/30 z-10 top-0 left-0 rounded-md' onClick={()=>setShowModal(false)}/>
            <div className='h-1/2 lg:w-1/2 w-4/5 bg-slate-50 dark:bg-slate-700 shadow-2xl z-20  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
                <p className='text-black dark:text-white font-bold text-[24pt]'>{paymentMethod === 1 ? "M-PESA":"E-MOLA"}</p>
                <img className='h-1/3 w-1/3 object-contain' src={paymentMethod === 1 ? "/mpesa.png":"/emola.png"}/>
                <div className='flex flex-col w-full items-center mt-5'>
                    <label htmlFor="numeroTelefonePagamento" className="text-black dark:text-white text-center">Número de celular: </label>
                    <input type="text" className='outline-none border-b-2 dark:border-white bg-transparent border-black w-1/2 dark:text-white text-black h-12 text-center'/>
                </div>
                <button className='font-bold rounded-lg letter_spacing_1 h-10 text-white w-[30%] min-w-fit bg-[linear-gradient(90deg,orange,rgb(180,30,195))] mt-5' type='button' onClick={()=>{
                    setMarcacao(prev=>{
                        prev.pagamento = paymentMethod;
                        async function sendForm(){
                            setPrecessingState(true)
                            const res = await fetch("http://localhost:3000/api/setMarcacao",{
                                method:"Post",
                                headers: {"Content-type":"application/json"},
                                body: JSON.stringify({prev,paymentMethod})
                            })
                            if(res.status === 201){
                                setPrecessingState(false)
                                setMessageStatus(true)
                                setMessageBody(prev.nome+ ", a sua marcação foi feita com sucesso!")
                                setShowMessageDialog(true)
                                setTimeout(()=>{
                                    window.location.replace("/")
                                },1000)
                            }
                        }
                        sendForm();
                    })
                }}>Confirmar</button>
            </div>
        </>}
        <section className='lg:w-2/3 lg:h-3/4 w-full h-full max-lg:rounded-t-3xl bg-slate-50 lg:rounded-lg shadow-xl text-[rgb(15,15,15)] flex flex-col items-center p-4 relative dark:bg-slate-800 dark:text-[rgb(240,240,240)]'>

        <span className='absolute left-[2%] top-[0%] flex items-center justify-center -translate-x-[2%] text-orange-600 h-fit text-[36pt]' onClick={()=>{
            console.log("clic")
            setStep(prev=> {
                if(prev === 0){
                    window.location.replace("/")
                }
                return prev - 1
            })
        }}>&lt;</span>


            <Suspense fallback={<>loading...</>}>
                {step === 0 && <Atendimento setMarcacao={setMarcacao} step={setStep} status={setMessageStatus} message={setMessageBody} setShowMessageDialog={setShowMessageDialog}/> }
                {step === 1 && <PersonaInfo setMarcacao={setMarcacao} step={setStep} status={setMessageStatus} message={setMessageBody} setShowMessageDialog={setShowMessageDialog}/>}
                {step === 2 && <PacksAndPayment setMarcacao={setMarcacao} step={setStep} setShowModal={setShowModal} setPaymentMethod={setPaymentMethod} status={setMessageStatus} message={setMessageBody} setShowMessageDialog={setShowMessageDialog}/>}
            </Suspense>
        </section>
    </>
  )
}

function MessageDialog({status, message, setShowMessageDialog}){
    const box = useRef()
    return (
        <div ref={box}  className='z-[100] transition-opacity h-full w-full absolute inset-0 bg-black/20 flex items-center justify-center'>
            <div className='bg-white dark:bg-slate-700 lg:w-1/4 w-3/4 lg:h-[15%] h-[30%] flex flex-col items-end justify-between rounded-lg' >
                <img className="w-full h-1/3 object-contain" src="/img/core-img/logo png.png" alt="" srcset="" />
                <p className="text-black dark:text-slate-50 w-full font-bold h-1/3 text-center">{message}</p>
                <button className="bg-yellow-500 rounded-md h-[20%] w-14 shadow-md" onClick={()=>{
                    box.current.classList.add("opacity-0")
                    setTimeout(()=>{
                        setShowMessageDialog(false)
                    }, 200)
                }}>Ok</button>
            </div>
        </div>
        
    )
}