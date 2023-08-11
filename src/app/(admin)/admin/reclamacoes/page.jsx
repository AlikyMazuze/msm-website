import React from 'react'

function page() {
  return (
    <section className="w-full">
            <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5 ">

                <div className="bg-gray-800 pt-3">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h1 className="font-bold pl-2">Reclamações</h1>
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
                                    <th className="text-left text-blue-900 border-r-4">Nome</th>
                                    <th className="text-left text-blue-900 border-r-4">Data</th>
                                    <th className="text-left text-blue-900 border-r-4">Hora</th>
                                    <th className="text-left text-blue-900 border-r-4">Reclamação</th>
                                    <th className="text-center text-blue-900 bg-black/20">Acções</th>                                    
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Obi Wan Kenobi</td>
                                    <td>22/07/2023</td>
                                    <td>8:00</td>
                                    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat nisi nihil quia quo, hic nobis officia vitae sequi, rem ratione nam veritatis, reprehenderit accusamus repellat fugit aliquid! Tempora, alias!</td>
                                    <td className="flex p-2 gap-2 items-center justify-center">
                                        <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-red-600 hover:text-white transition-all">Remover</button>
                                        <button className="w-1/2 h-[90%] rounded-lg shadow-md outline-solid hover:bg-yellow-400 transition-all">Responder</button>
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

export default page