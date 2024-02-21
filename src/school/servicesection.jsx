import React from "react";

// Services section component
const ServicesSection = () => {
    return (
        <section id="services" className="home-section bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="section-heading">
                        <h2>Facilities</h2>
                        <div className="heading-line"></div>
                        <p>We Provide's many Facilities in our school.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div id="carousel-service" className="service carousel slide">

                        {/* <!-- slides --> */}
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="row">
                                    <div className="col-sm-12 col-md-offset-1 col-md-6">
                                        <div className="wow bounceInLeft">
                                            <h4>CCTV SURVEILLANCE</h4>
                                            <p>Stern and staff security personals are kept to ensure 100% safety of students in schools and buses. Also all classrooms, playgrounds, administrative area and all school buses is under CCTV surveillance on which
                                                the top management keeps a close eye.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5">
                                        <div className="screenshot wow bounceInRight">
                                            <img src="assets/school_images/cctv.jpeg" 
                                            style={{width:"100%", height:"250px"}}
                                            className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-sm-12 col-md-offset-1 col-md-6">
                                        <div className="wow bounceInLeft">
                                            <h4>LIBRARY</h4>
                                            <p>There is no furniture so charming as books. So, how can an institution of learning not house a library? After all, libraries are places where people and information come together. School libraries do not just
                                                support the student population.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5">
                                        <div className="screenshot wow bounceInRight">
                                            <img src="assets/school_images/library.jpeg" 
                                            
                                             style={{width:"100%", height:"250px"}}
                                            className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-sm-12 col-md-offset-1 col-md-6">
                                        <div className="wow bounceInLeft">
                                            <h4>SPORTS</h4>
                                            <p>What is the immediate picture that comes to mind when we think of a playground? Most certainly an environment that is care-free, high-spirited and bursting forth with life. Play is often dismissed as an optional
                                                activity – an ‘extra’ – but nothing could be further from the truth.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5">
                                        <div className="screenshot wow bounceInRight">
                                            <img src="assets/school_images/sport.jpeg" style={{width:"100%", height:"250px"}}  className="img-responsive" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Indicators --> */}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-service" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-service" data-slide-to="1"></li>
                            <li data-target="#carousel-service" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServicesSection;