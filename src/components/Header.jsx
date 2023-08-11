"use client"
import Link from 'next/link'
import Image from 'next/image'
import {faBars, faX, faHome, faMessage, faInbox, faQuestionCircle, faContactCard} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function Header() {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <header className="w-full h-[10%] lg:bg-black/80 text-white flex items-center justify-between lg:justify-evenly">
        <div className='w-1/4 h-full lg:hidden max-lg:pl-2'>
            <FontAwesomeIcon inverse icon={faBars} className='h-full w-2/3' onClick={()=>{
            setShowMenu(true)
        }}/>
        </div>
        <div className='h-full lg:w-2/12 w-[60%] p-4 flex justify-end'>
            <img src="img/core-img/logo png.png" alt="STUDIO MSM" className='h-full lg:w-2/3 w-full object-contain'/>
        </div>

        <div className='hidden w-full h-full lg:flex items-center justify-center'>
            <ul className='w-2/3 h-full m-0 p-0 flex justify-evenly items-center font-bold text-[11pt]'>
                <li className='list-none text-white'>
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li className='list-none text-white'>
                    <Link href="/marcacoes">
                        MARCAÇÕES
                    </Link>
                </li>
                <li className='list-none text-white'>
                    <Link href="/reclamacoes">
                        RECLAMAÇÕES
                    </Link>
                </li>
                <li className='list-none text-white'>
                    <Link href="/about">
                        ABOUT
                    </Link>
                </li>
                <li className='list-none text-white'>
                    <Link href="/contact">
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    </header>
    {showMenu && 
    <div className='bg-black/90 flex items-center justify-center absolute inset-0 z-40'>
        <FontAwesomeIcon icon={faX} className='h-6 w-6 absolute top-[5%] left-[95%] -translate-x-full' scale="2x" inverse onClick={()=>{
            setShowMenu(false)
        }}/>
        <ul className='w-2/3 h-[70%] m-0 p-0 flex flex-col justify-evenly items-center font-bold text-[11pt]'>
                <li className='flex gap-2 items-center text-[16pt] list-none text-white'>
                    <FontAwesomeIcon icon={faHome} inverse className='h-full w-5'/>
                    <Link href="/">HOME</Link>
                </li>
                <li className='flex gap-2 items-center text-[16pt] list-none text-white'>
                    <FontAwesomeIcon icon={faMessage} inverse className='h-full w-5'/>
                    <Link href="/marcacoes">MARCAÇÕES</Link>
                </li>
                <li className='flex gap-2 items-center text-[16pt] list-none text-white'>
                    <FontAwesomeIcon icon={faInbox} inverse className='h-full w-5'/>
                    <Link href="/reclamacoes">RECLAMAÇÕES</Link>
                </li>
                <li className='flex gap-2 items-center text-[16pt] list-none text-white'>
                    <FontAwesomeIcon icon={faQuestionCircle} inverse className='h-full w-5'/>
                    <Link href="/about">ABOUT</Link>
                </li>
                <li className='flex gap-2 items-center text-[16pt] list-none text-white'>
                    <FontAwesomeIcon icon={faContactCard} inverse className='h-full w-5'/>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
    </div>
    }
    </>
    
  )
}

export default Header