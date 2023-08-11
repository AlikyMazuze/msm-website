import Header from "@/components/Header"



export const metadata = {
    title: "Maputo - Selfie Museum"
  }

function layout({children}) {
  return (
    <>
    <Header/>
    <main className="w-full h-[90%] flex items-center justify-evenly lg:bg-[url(/newerBackground.jpg)] bg-cover bg-[position:center]">
        {children}        
    </main>
    </>
  )
}

export default layout