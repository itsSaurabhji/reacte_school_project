import React from "react";

// Team section component
const TeamSection = () => {
    return (
        <section id="team" className="home-section bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="section-heading">
                        <h2>Our School Details</h2>
                        <div className="heading-line"></div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                    <div className="box-team wow bounceInUp" data-wow-delay="0.1s">
                        <img src="assets/school_images/school_building.jpeg" 
                        
                        style={{width:"100%", height:"250px"}}
                        alt="" className="img-circle img-responsive" />
                        <p>School Building</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" data-wow-delay="0.3s">
                    <div className="box-team wow bounceInUp">
                        <img src="assets/school_images/school_director.jpeg" 
                        style={{width:"100%", height:"250px"}}
                        alt="" className="img-circle img-responsive" />

                        <p>Director</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" data-wow-delay="0.5s">
                    <div className="box-team wow bounceInUp">
                        <img src="assets/school_images/school_principle.jpeg" 
                        style={{width:"100%", height:"250px"}}
                        alt="" className="img-circle img-responsive" />

                        <p>Principal</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3" data-wow-delay="0.5s">
                    <div className="box-team wow bounceInUp">
                        <img src="assets/school_images/teacher.jpeg" alt="" 
                        style={{width:"100%", height:"250px"}}
                        className="img-circle img-responsive" />

                        <p>Teacher's</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};

export default TeamSection;