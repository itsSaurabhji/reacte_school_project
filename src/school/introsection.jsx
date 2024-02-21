import React from "react";

// Intro section component
const IntroSection = () => {
    return (
        <section id="intro">
        <div className="intro-container">
            <div id="introCarousel" className="carousel slide carousel-fade" data-ride="carousel">

                <div className="carousel-inner" role="listbox">

                    {/* <!-- Slide 1 --> */}
                    <div className="item active">
                        <div className="carousel-background"><img src="assets/school_images/slider_img/slider1.jpeg" alt=""></img></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animated fadeInDown">floobyte WEBSITE DEMO</h2>
                                <p className="animated fadeInUp">floobyte WEBSITE DEMO is an Hindi Medium medium, Co - educational school situated on Bhopal.</p>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Slide 2 --> */}
                    <div className="item">
                        <div className="carousel-background"><img src="assets/school_images/slider_img/slider2.jpeg" alt=""></img></div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animated fadeInDown"><span> Our Mission</span>
                                </h2>
                                <p className="animated fadeInUp">To provide quality, comprehensive education and raise compassionate global citizens.</p>

                            </div>
                        </div>
                    </div>

                    {/* <!-- Slide 3 --> */}
                    <div className="item">
                        <div className="carousel-background"><img src="assets/school_images/slider_img/slider3.jpeg" alt=""></img>img</div>
                        <div className="carousel-container">
                            <div className="carousel-content">
                                <h2 className="animated fadeInDown"><span> Our Vision</span>
                                </h2>
                                <p className="animated fadeInUp">To facilitate life-long learning beyond knowledge acquisition by providing them skills to comprehend, apply, appreciate, analyze, synthesize and evaluate.</p>

                            </div>
                        </div>
                    </div>

                </div>

                <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon fa fa-angle-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

                <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon fa fa-angle-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

            </div>
        </div>
    </section>
    );
};

export default IntroSection;