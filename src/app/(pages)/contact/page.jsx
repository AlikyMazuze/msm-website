import React from 'react'

function page() {
  return (
    <>
    <section className="contact-area section_padding_100 mt-100">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-10">
                <div className="contact-heading-text text-center mb-100">
                    <span></span>
                    <h2>Please get in touch</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis. Vestibulum id orci ligula. Sed tempor, nunc ut sodales pulvinar, mauris ante euismod magna, at elementum lectus leo sed enim. Praesent dictum suscipit tincidunt. Nulla facilisi. Aenean in mollis orci. Ut interdum vulputate ante a egestas. Pellentesque varius purus malesuada arcu semper vehicula. </p>
                </div>
            </div>
            {/* <!-- Contact Form Area --> */}
            <div className="col-10">
                <div className="contact-form-area">
                    <form action="#" method="post">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="col-12 col-md-4">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                            <div className="col-12">
                                <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn studio-btn mt-3"><img src="img/core-img/logo-icon.png" alt=""/> Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

{/* <!-- Google Maps --> */}
<div className="map-area">
    <div className="container">
        <div className="row justify-content-end">
            <div className="col-10">
                <div id="googleMap"></div>
                {/* <!-- Contact Info --> */}
                <div className="contact-core-info d-flex align-items-center wow fadeInLeftBig" data-wow-delay="1s" data-wow-duration="1000ms">
                    <div className="contactInfo">
                        <img src="img/core-img/logo.png" alt=""/>
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
    </div>
</div>
</>
  )
}

export default page