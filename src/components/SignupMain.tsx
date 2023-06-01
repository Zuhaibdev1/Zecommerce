import React, { useContext } from 'react'

const SignupMain = () => {
    const alert = () => {
        alert("Done")
    }
    const OnSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='container'>
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">Welcome To The Signup Page</span></h2>
            </div>
            <div className='contact-form'>
                <form onSubmit={OnSubmit} name="sentMessage" id="contactForm" noValidate="novalidate" className='container'>
                    <div className="control-group">
                        <input type="email" className="form-control" id="name" placeholder="Enter Your First Name Here"
                            required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="email" className="form-control" id="name" placeholder="Enter Your Last Name Here"
                            required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="email" className="form-control" id="name" placeholder="Enter Your Email Here"
                            required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="password" className="form-control" id="email" placeholder="Enter Your Password Here"
                            required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <input type="password" className="form-control" id="email" placeholder="Enter Your Confirm Password Here"
                            required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div>
                        <button className="btn btn-primary py-2 px-4" onClick={() => console.log("Submited")} type="submit" id="sendMessageButton">Signup</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default SignupMain