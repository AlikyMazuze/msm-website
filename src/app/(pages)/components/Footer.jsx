import React from 'react'

function Footer() {
  return (
    <footer className="footer-area">
        <div className="container-fluid h-100">
            <div className="row h-100">
                <div className="col-12 h-100">
                    <div className="footer-content h-100 d-md-flex align-items-center justify-content-between">
                        {/* <!-- Single Footer Content --> */}
                        <div className="single-footer-content">
                            <img src="img/core-img/map.png" alt=""/>
                            <a href="#">Blvd Libertad, 34 m05200 Arévalo</a>
                        </div>
                        {/* <!-- Single Footer Content --> */}
                        <div className="single-footer-content">
                            <img src="img/core-img/smartphone.png" alt=""/>
                            <a href="#">0034 37483 2445 322</a>
                        </div>
                        {/* <!-- Single Footer Content --> */}
                        <div className="single-footer-content">
                            <img src="img/core-img/envelope-2.png" alt=""/>
                            <a href="#">hello@company.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer