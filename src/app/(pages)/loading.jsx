import React from 'react'

export default function loading() {
  return (
    <div className="fixed z-50 w-full h-full bg-gray-200 top-0 left-0 flex justify-center items-center">
      <div className="relative w-60 h-0">
        <div className="absolute inset-0 m-auto w-full h-full border-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    <div className="questions-area text-center absolute bottom-20 z-15 w-full left-0 px-4">
      <p>Sabia que?</p>
      <ul>
        <li className="hidden md:block text-sm font-semibold text-gray-700 transition duration-500">
          Museu de Selfie em Maputo
        </li>
        <li className="hidden md:block text-sm font-semibold text-gray-700 transition duration-500">
          Photography is the toughest profession in the world.
        </li>
        <li className="hidden md:block text-sm font-semibold text-gray-700 transition duration-500">
          The world’s largest photo album by dimensions was 13 ft 11.5 in x 17 ft.
        </li>
        <li className="hidden md:block text-sm font-semibold text-gray-700 transition duration-500">
          The world’s largest photo mosaic featured 176,175 pictures.
        </li>
        <li className="hidden md:block text-sm font-semibold text-gray-700 transition duration-500">
          The world’s largest camera lens was a 5200mm lens attached to a canon.
        </li>
      </ul>
    </div>
    </div>
  )
}
