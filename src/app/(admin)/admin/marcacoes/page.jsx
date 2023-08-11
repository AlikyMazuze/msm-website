"use client"
import React, { useEffect, useRef, useState } from 'react'


function page() {
    useEffect(()=>{
        async function getMarcacoes(){
            const gettotalMarcacoes = await fetch("http://localhost:3000/api/getMarcacoes", {
            cache: "no-cache"
            })
            const res = await gettotalMarcacoes.json();
            setMarcacoes(res[0])
        }
        getMarcacoes();
    },[])
    
    const [marcacoes, setMarcacoes] = useState(null);
    const [table, setTable] = useState(<>

    </>)
    const searchBox = useRef();
    return (
        <section className="w-full">
        <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5 ">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 className="font-bold pl-2">Marcações</h1>
                </div>
            </div>
            
            <div className="w-full w-3/3 p-6">
                {/* <!--Table Card--> */}
                <div className="bg-white border-transparent rounded-lg shadow-xl">
                    <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                        <h2 className="font-bold uppercase text-gray-600">Usuários que fizeram marcações</h2>
                    </div>
                    <div className="p-5">
                        <table className="w-full p-5 text-gray-700">
                            <thead>
                            <tr>
                                <th className="text-left text-blue-900">Data/Hora</th>
                                <th className="text-left text-blue-900">Nome</th>
                                <th className="text-left text-blue-900">Email</th>
                                <th className="text-left text-blue-900">Telefone</th>
                                <th className="text-left text-blue-900">Pacote</th>
                                <th className="text-left text-blue-900">Pagamento</th>
                                <th className="text-left text-blue-900">Referência</th>                                    
                                <th className="text-center text-blue-900 bg-black/20">Acções</th>                                    
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Obi Wan Kenobi</td>
                                <td>obiwan@gmail.com</td>
                                <td>876449376</td>
                                <td>1</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Greedo</td>
                                <td>greedo@gmail.com</td>
                                <td>862582024</td>
                                <td>3</td>
                                <td>EMOLA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>EMOLA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="font-bold">09/08/23 - 8:00</td>
                                <td>Darth Vader</td>
                                <td>Dark@gmail.com</td>
                                <td>845938054</td>
                                <td>2</td>
                                <td>MPESA</td>
                                <td></td>
                                <td className="flex p-2 gap-2 items-center justify-center">
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                    <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Contactar</button>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>

                        <p className="py-2"><a href="#">Ver mais marcações...</a></p>

                    </div>
                </div>
                {/* <!--/table Card--> */}
            </div>

        </div>
    </section>
  )
}

function FormatDate({date}){
    return(
        <span>
            {date.dt}
        </span>
    )
}
// async function onSearchType(value, table){
//     await fetch("http://localhost:3000/api/admin/search", {
//         method: "POST",
//         headers: {"Content-type": "application/json"},
//         body: JSON.stringify({
//             value
//         })
//     })
//     table(<table classNameName='text-black w-full h-full'>
//     <tr classNameName="h-4 border-black border-2 bg-gray-900 text-white">
//         <th classNameName='h-fit'>
//             Data
//         </th>
//         <th classNameName='h-fit'>
//             Cliente
//         </th>
//         <th classNameName='h-fit'>
//             Email
//         </th>
//         <th classNameName='h-fit'>
//             Pacote
//         </th>
//     </tr>
//     {marcacoes && marcacoes.map((value, key)=>{
//     return (
//         <tr classNameName='h-3 border-black border-2' key={key}>
//             <td>
//             <FormatDate date={value}/>
//             </td>
//             <td>{value.nome}</td>
//             <td>{value.email}</td>
//             <td>{value.pack}</td>
//         </tr>
//     )
// })}
// </table>)

// }
export default page