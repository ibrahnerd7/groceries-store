/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory()

    const signUpUser = async (e) => {
        e.preventDefault()
        console.log(email,password)
        // let user = await registerUser(email, password);

        // if (!user.uid) {
        //     setError(user.message)
        // } else {
        //     history.push("/profile")
        // }

    }

    return (
        <section id="contact" className="contact text-center">
            <div className="container">
                <div  data-aos="fade-right">
                        <h2>Login</h2>
                </div>
                <div className="row">
                <div className="col-lg-3"></div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <form className="php-email-form mt-4">
                            <div className="form-group">
                                <input value={email}  onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <input value={password}  onChange={(event) => setPassword(event.target.value)} type="text" className="form-control" name="password" id="password" placeholder="Password" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit"   onClick={signUpUser}>Login</button></div>
                            <div className="text-center mt-4"><p>Don't have an account ? <span><Link to="/signup"><u>Sign up</u></Link></span></p></div>
                        </form>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <p className="text-center mt-4"><Link to="/"><u>Go to home </u></Link></p>
        </section>
    )
}

export default Login