/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Login = (props) => {
    return (
        <section id="contact" className="contact text-center">
            <div className="container">
                <div  data-aos="fade-right">
                        <h2>Login</h2>
                </div>
                <div className="row">
                    <div className="col-lg" data-aos="fade-up" data-aos-delay="100">

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
                            <div className="text-center"><p>Don't have an account ? <a href="#">Sign up</a></p></div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login