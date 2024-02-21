import React from "react";

// Contact section component
const ContactSection = () => {
    return (
        <section id="contact" className="home-section bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="section-heading">
                        <h2>Contact us</h2>
                        <div className="heading-line"></div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>

                    <form action="" method="post" className="form-horizontal contactForm" role="form">
                        <div className="col-md-offset-2 col-md-8">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                        </div>

                        <div className="col-md-offset-2 col-md-8">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                        </div>

                        <div className="col-md-offset-2 col-md-8">
                            <div className="form-group">
                                <input type="text" className="form-control" name="sub" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                            </div>
                        </div>

                        <div className="col-md-offset-2 col-md-8">
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validation"></div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-offset-2 col-md-8">
                                <button type="submit" name="submit" className="btn btn-theme btn-lg btn-block">Send message</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </section>
    );
};

export default ContactSection;