import React from "react";

// Portfolio section component
const PortfolioSection = () => {
    return (
        <section id="portfolio" class="home-section bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="section-heading">
                        <h2>Gallery</h2>
                        <div className="heading-line"></div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">

                    <ul id="og-grid" className="og-grid">
                        <li>

                            <img src="assets/school_images/Gallery_image/Gallery_image1.jpeg" style={{width:"250px", height:"250px"}}
                            
                            alt="" />

                        </li>
                        <li>
                            <img src="assets/school_images/Gallery_image/Gallery_image2.jpeg" style={{width:"250px", height:"250px"}}  alt="" />
                        </li>
                        <li>
                            <img src="assets/school_images/Gallery_image/Gallery_image3.jpeg" style={{width:"250px", height:"250px"}}  alt="" />
                        </li>
                        <li>
                            <img src="assets/school_images/Gallery_image/Gallery_image4.jpeg" style={{width:"250px", height:"250px"}}  alt="" />
                        </li>
                        <li>
                            <img src="assets/school_images/Gallery_image/Gallery_image5.jpeg" style={{width:"250px", height:"250px"}}  alt="" />
                        </li>
                        <li>
                            <img src="assets/school_images/Gallery_image/Gallery_image6.jpeg" style={{width:"250px", height:"250px"}}  alt="" />
                        </li>
                        <li>
                            <img src="assets/school_images/Gallery_image/Gallery_image7.jpeg" style={{width:"250px", height:"250px"}}  alt="" />    
                        </li>
                        <li>
                            <img src={"assets/school_images/Gallery_image/Gallery_image8.jpeg"} style={{width:"250px", height:"250px"}}  alt="" />
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    </section>
    );
};

export default PortfolioSection; 