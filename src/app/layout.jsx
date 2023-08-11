import './globals.css'
import Image from 'next/image'
// import "./assets/css/animate.css"
// import "./assets/css/core-style.css"
import "./assets/css/font-awesome.min.css"
// import "./assets/css/magnific-popup.css"
// import "./assets/css/owl.carousel.css"
// import "./assets/css/pe-icon-7-stroke.css"
// import "./responsive.css"
// import "./assets/js/plugins"
// import "./assets/js/map-active"
// import "./assets/js/active"



export const metadata = {
  title: "Maputo - Selfie Museum | Home"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
