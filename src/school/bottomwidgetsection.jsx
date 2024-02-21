import React from "react";

const BottomWidgetsection = () => {
    return (
        <section id="bottom-widget" class="home-section bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="contact-widget wow bounceInLeft">
                        <i className="fa fa-map-marker fa-4x"></i>
                        <h5>Address</h5>
                        <p>
                            Badri Narayan Avenue Indore  </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-widget wow bounceInUp">
                        <i className="fa fa-phone fa-4x"></i>
                        <h5>Call</h5>
                        <p>
                            +91 9301930088
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-widget wow bounceInRight">
                        <i className="fa fa-envelope fa-4x"></i>
                        <h5>Email us</h5>
                        <p>
                            support@floobyte.com </p>
                    </div>
                </div>
            </div>
            <div className="row mar-top30">
                <div className="col-md-12">
                    <h5>We're on social networks</h5>
                    <ul className="social-network">
                        <li><a href="">
                <span className="fa-stack fa-2x">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span></a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    );
};

export default BottomWidgetsection;