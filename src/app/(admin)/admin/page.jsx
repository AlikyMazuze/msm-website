"use client" 
import React, { useEffect } from 'react'
import Aside from '../components/aside'
import Header from '../components/header'
import Link from 'next/link'
import MetricCards from '../components/MetricCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWallet, faUsers, faInbox, faServer } from '@fortawesome/free-solid-svg-icons'
import {Line} from "react-chartjs-2"

async function page() {
  const gettotalMarcacoes = await fetch("http://localhost:3000/api/getTotalMarcacoes",{ 
    cache: "no-cache"
  })
  const marcacoes = await gettotalMarcacoes.json();
  
  const gettotalReclamacoes = await fetch("http://localhost:3000/api/getTotalReclamacoes",{ 
    cache: "no-cache"
  })
  const reclamacoes = await gettotalReclamacoes.json();
  const months = new Date().getMonth()
    const firstHalf = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"]
    const secondHalf = ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const lineChartData = {
        "labels": months<5?firstHalf:secondHalf,
        "datasets": [{
            "label": "Marcações",
            "data": [65, 59, 80, 81, 56, 55, 40],
            "fill": false,
            "borderColor": "rgb(75, 192, 192)",
            "lineTension": 0.1
        }]
    }

  return (
    <>
    <section>
            <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

                <div className="bg-gray-800 pt-3">
                    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                        <h1 className="font-bold pl-2">Analytics</h1>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-green-600"><FontAwesomeIcon className='h-full w-full' size='2x' inverse icon={faWallet}/></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Total dos Pagamentos</h2>
                                   <p className="font-bold text-3xl">12000 Mzn <span className="text-green-500"><i className="fas fa-caret-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-pink-600"><FontAwesomeIcon className='h-full w-full' size='2x' inverse icon={faUsers}/></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Total Marcações</h2>
                                    <p className="font-bold text-3xl">6 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></p>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-red-600"><FontAwesomeIcon className='h-full w-full' size='2x' inverse icon={faInbox}/></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Total Reclamações</h2>
                                    <p className="font-bold text-3xl">0 <span className="text-red-500"><i className="fas fa-caret-up"></i></span></p>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        {/* <!--Metric Card--> */}
                        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                            <div className="flex flex-row items-center">
                                <div className="flex-shrink pr-4">
                                    <div className="rounded-full p-5 bg-blue-600"><FontAwesomeIcon className='h-full w-full' size='2x' inverse={true} icon={faServer}/></div>
                                </div>
                                <div className="flex-1 text-right md:text-center">
                                    <h2 className="font-bold uppercase text-gray-600">Tempo de actividade</h2>
                                    <p className="font-bold text-3xl">5 dias</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        {/* <!--Metric Card--> */}
                        
                        {/* <!--/Metric Card--> */}
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                        {/* <!--Metric Card--> */}
                        
                        {/* <!--/Metric Card--> */}
                    </div>
                </div>


                <div className="flex flex-row flex-wrap flex-grow mt-2">

                {/* <!-- <div className="w-full md:w-1/2 xl:w-1/3 p-6"> --> */}
                    {/* <!--Graph Card--> */}
                    {/* /Graph Card --> */}
                {/* <!-- </div> --> */}

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/* <!--Graph Card--> */}
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Marcações</h2>
                        </div>
                        <div className="p-5">
                            {/* <Line className="chartjs"  data={lineChartData}/> */}
                            <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                {/* const months = new Date().getMonth()
                                const firstHalf = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"]
                                const secondHalf = ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
                                new Chart(document.getElementById("chartjs-0"), {
                                    "type": "line",
                                    "data": {
                                        "labels": months<5?firstHalf:secondHalf,
                                        "datasets": [{
                                            "label": "Marcações",
                                            "data": [65, 59, 80, 81, 56, 55, 40],
                                            "fill": false,
                                            "borderColor": "rgb(75, 192, 192)",
                                            "lineTension": 0.1
                                        }]
                                    },
                                    "options": {}
                                }); */}
                            </script>
                        </div>
                    </div>
                    {/* <!--/Graph Card--> */}
                </div>

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/* <!--Graph Card--> */}
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Reclamações</h2>
                        </div>
                        <div className="p-5">
                            <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                
                                {/* new Chart(document.getElementById("chartjs-1"), {
                                    "type": "bar",
                                    "data": {
                                        "labels": months<5?firstHalf:secondHalf,
                                        "datasets": [{
                                            "label": "Reclamações",
                                            "data": [65, 59, 80, 81, 56, 55, 40],
                                            "fill": false,
                                            "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                            "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                            "borderWidth": 1
                                        }]
                                    },
                                    "options": {
                                        "scales": {
                                            "yAxes": [{
                                                "ticks": {
                                                    "beginAtZero": true
                                                }
                                            }]
                                        }
                                    }
                                }); */}
                            </script>
                        </div>
                    </div>
                    {/* <!--/Graph Card--> */}
                </div>

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/* <!--Graph Card--> */}
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h5 className="font-bold uppercase text-gray-600">Graph</h5>
                        </div>
                        <div className="p-5"><canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined"></canvas>
                            <script>
                                {/* new Chart(document.getElementById("chartjs-4"), {
                                    "type": "doughnut",
                                    "data": {
                                        "labels": ["P1", "P2", "P3"],
                                        "datasets": [{
                                            "label": "Issues",
                                            "data": [300, 50, 100],
                                            "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                        }]
                                    }
                                }); */}
                            </script>
                        </div>
                    </div>
                    {/* <!--/Graph Card--> */}
                </div>

                    <div className="w-full md:w-1/2 xl:w-2/3 p-6">
                        {/* <!--Table Card--> */}
                        <div className="bg-white border-transparent rounded-lg shadow-xl">
                            <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                                <h2 className="font-bold uppercase text-gray-600">Usuários que fizeram marcações</h2>
                            </div>
                            <div className="p-5">
                                <table className="w-full p-5 text-gray-700">
                                    <thead>
                                    <tr>
                                        <th className="text-left text-blue-900">Nome</th>
                                        <th className="text-left text-blue-900">Email</th>
                                        <th className="text-left text-blue-900">Telefone</th>
                                        <th className="text-left text-blue-900">Pacote</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>Obi Wan Kenobi</td>
                                        <td>obiwan@gmail.com</td>
                                        <td>876449376</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Greedo</td>
                                        <td>greedo@gmail.com</td>
                                        <td>862582024</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Darth Vader</td>
                                        <td>Dark@gmail.com</td>
                                        <td>845938054</td>
                                        <td>2</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <p className="py-2"><a href="#">Ver mais marcações...</a></p>

                            </div>
                        </div>
                        {/* <!--/table Card--> */}
                    </div>

                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/* <!--Advert Card--> */}
                    <div className="bg-white border-transparent rounded-lg shadow-xl">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                            <h2 className="font-bold uppercase text-gray-600">Advert</h2>
                        </div>
                        <div className="p-5 text-center">



                        </div>
                    </div>
                    {/* <!--/Advert Card--> */}
                </div>


                </div>
            </div>
        </section>
    </>
  )
}

export default page