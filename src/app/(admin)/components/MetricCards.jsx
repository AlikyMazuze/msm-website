import React from 'react'

function MetricCards({cardName, numbCard}) {
  return (
    <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
        <div class="flex flex-row items-center">
            <div class="flex-shrink pr-4">
                <div class="rounded-full p-5 bg-pink-600"><i class="fas fa-users fa-2x fa-inverse"></i></div>
            </div>
            <div class="flex-1 text-right md:text-center">
                <h2 class="font-bold uppercase text-gray-600">{cardName}</h2>
                <p class="font-bold text-3xl">{numbCard}<span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></p>
            </div>
        </div>
    </div>
  )
}

export default MetricCards