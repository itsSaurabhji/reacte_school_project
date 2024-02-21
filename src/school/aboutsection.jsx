import React from "react";

// About section component
const AboutSection = () => {
    return (
        <section id="about" class="home-section bg-white">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="section-heading">
                        <h2>About us</h2>
                        <div className="heading-line"></div>
                        <p>floobyte WEBSITE DEMO is an Hindi Medium medium, Co - educational school situated on Bhopal.</p>
                    </div>
                </div>
            </div>
            <div className="row wow fadeInUp">
                <div className="col-md-6 about-img">
                    <img src="assets/school_images/about_image.jpeg" alt=""></img>
                </div>

                <div className="col-md-6 content">
                    <h3>The floobyte WEBSITE DEMO has excelled, for many years, in providing fine education, to the pupils entrusted to its care. In these years that have gone by, the School endeavored kindling a fire in the young minds of its pupils, preparing
                        them for a world of tomorrow, full of challenges, so that in the words of Plato ‘they may be better able to discover with accuracy the peculiar bent of the genius of each.
                    </h3>

                    <p>
                        A variety of activities are offered as an integral part of the curriculum to provide each student an opportunity to develop a wholesome personality. Inter House; Intra Class competitions ensure the students imbibe a healthy, competitive spirit and loyalty
                        to their respective houses or classes. Debates, dramatics, choral singing, elocution, math wizard, Spelling Bee, creative writing and team games like football, cricket, basket ball and throw ball are some of the activities that
                        students can participate in.
                    </p>

                </div>
            </div>
        </div>
    </section>

    );
};

export default AboutSection;
