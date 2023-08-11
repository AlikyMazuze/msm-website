import React from 'react'

function SendEmailModal() {
  return (
    <div className="absolute inset-0 w-full h-full bg-white z-50 flex items-center justify-center">
                <div className="h-1/2 w-1/3 bg-white shadow-xl">
                    <form className="flex flex-col justify-between h-full w-full">
                        <div className="w-full h-1/3 flex flex-col">
                            <label for="address">Destinatário:</label>
                            <span id="address">address@gmail.com</span>
                        </div>
                        <div className="p-4 h-full">
                            <textarea className="w-full h-full border-2 border-black" id="" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </div> 
  )
}

export default SendEmailModal