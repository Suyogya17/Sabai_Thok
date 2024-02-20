import "./Login.css"
import Logo from "../assets/Logo/logo.png"

function Login () {
    return (
        <>
        <div className="main-div-login">
        <div className="side-design">
        </div>
        <div className="login-page-form-div">
            <h2>---  SIGN-IN  ---</h2>
            <form action="" className="loginform">
                <div className="form-upper-part">
                <label htmlFor=""> Username</label> 
                <input type="text"  className="inputforloginpage" placeholder="Username" required/>
                <label htmlFor="">Password</label>
                <input type="text" className="inputforloginpage" placeholder="Password" required/>
                <button className="bttnforlogin" type="submit">log-In</button>
                </div>
               
                <div className="form-lower-part">
                <label htmlFor=""> Don't have an account ? <a href="/sign-up">Sign-Up</a></label>
                <a href=""> Forget Password ?  </a>
                </div>
                
            </form>

            
        </div>

        </div>
            
        </>
    );
}

export default Login;