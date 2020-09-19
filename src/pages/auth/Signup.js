import React from "react";
import {Link} from "react-router-dom";

const Signup = (props) => {
    return (
        <section id="contact" className="contact text-center">
            <div className="container">
                <div  data-aos="fade-right">
                        <h2>Signup</h2>
                </div>
                <div className="row">
                <div className="col-lg-3"></div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <form action="forms/contact.php" method="post" className="php-email-form mt-4">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Login</button></div>
                            <div className="text-center mt-4"><p>Already have an account ? <span><Link to="/login"><u>Signup</u></Link></span></p></div>
                        </form>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <p className="text-center mt-4"><Link to="/"><u>Go to home </u></Link></p>
        </section>
    )
}

export default Signup