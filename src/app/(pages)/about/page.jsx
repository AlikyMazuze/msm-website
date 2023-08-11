import React from 'react'

function page() {
  return (
    <>
    <section className="about-me-area mt-100 section_padding_100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <div className="about-me-thumb">
                        <img src="img/bg-img/about-me.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-10">
                    <div className="about-content mt-100 mb-100 text-center">
                        <span></span>
                        <h2>What can I tell you about me?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate id justo quis facilisis. Vestibulum id orci ligula. Sed tempor, nunc ut sodales pulvinar, mauris ante euismod magna, at elementum lectus leo sed enim. Praesent dictum suscipit tincidunt. Nulla facilisi. Aenean in mollis orci. Ut interdum vulputate ante a egestas. Pellentesque varius purus malesuada arcu semper vehicula.</p>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="single-service-area section_padding_0_100 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <img src="img/core-img/heart.png" alt=""/>
                                <h5>Wedding Photography</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="single-service-area section_padding_0_100 text-center wow fadeInUp" data-wow-delay="0.4s">
                                <img src="img/core-img/photo-camera.png" alt=""/>
                                <h5>Studio Photography</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="single-service-area section_padding_0_100 text-center wow fadeInUp" data-wow-delay="0.9s">
                                <img src="img/core-img/video-camera.png" alt=""/>
                                <h5>Portraits Photography</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel lectus eu felis semper finibus ac eget ipsum. Lorem ipsum.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    {/* <!-- Pie Bars Area Start --> */}
                    <div className="our-skills-area text-center">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-pie-bar" data-percent="75">
                                    <canvas className="bar-circle" width="100" height="100"></canvas>
                                    <h6>Fashion</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-pie-bar" data-percent="83">
                                    <canvas className="bar-circle" width="100" height="100"></canvas>
                                    <h6>Portraits</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-pie-bar" data-percent="25">
                                    <canvas className="bar-circle" width="100" height="100"></canvas>
                                    <h6>Studio</h6>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-pie-bar" data-percent="95">
                                    <canvas className="bar-circle" width="100" height="100"></canvas>
                                    <h6>Weddings</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default page