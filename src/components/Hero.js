import React from "react";

const Hero = (props) => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
                <h1>Your New Online Presence with Bethany</h1>
                <h2>We are team of talanted designers making websites with Bootstrap</h2>
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
        </section>
    )
}

export default Hero