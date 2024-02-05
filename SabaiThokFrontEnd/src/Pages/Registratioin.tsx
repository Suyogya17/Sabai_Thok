import "./Registration.css"
function Registration () {
    return (
        <>
        <div className="registration-page-form-div">
            <h2>---  SIGN-UP  ---</h2>
            <form action="" className="registrationform">
                <div className="registration-form-upper-part">
                <input type="text"  className="inputforregistrationpage" placeholder="First Name" required/>
                <input type="text"  className="inputforregistrationpage" placeholder="Last Name" required/>
                <input type="text"  className="inputforregistrationpage" placeholder="Email" required/>
                <input type="text"  className="inputforregistrationpage" placeholder="Username" required/>
                <input type="text" className="inputforregistrationpage" placeholder="Password" required/>
                <input type="text"  className="inputforregistrationpage" placeholder="Confirm Password" required/>
                <input type="date"  className="inputforregistrationpage" placeholder="Date" required/>
                <button className="bttnforregistration" type="submit">Sign-Up</button>
                </div>
               
                <div className="registration-form-lower-part">
                <label htmlFor=""> Already have an account ? <a href="/log-in">Sign-In</a></label>
                </div>
                
            </form>

            
        </div>
        </>
    );
}

export default Registration;