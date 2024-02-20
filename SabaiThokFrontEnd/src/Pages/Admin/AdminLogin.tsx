import "./AdminLogin.css"


function AdminLogin () {
    return (
        <>
        <div className="main-div-login">
        <div className="side-design">
        </div>
        <div className="login-page-form-div">
            <h2>---- ADMIN ---- <br/> --- SIGN-IN  ---</h2>
            <form action="" className="loginform">
                <div className="form-upper-part">
                <label htmlFor=""> Username</label> 
                <input type="text"  className="inputforloginpage" placeholder="Username" required/>
                <label htmlFor="">Password</label>
                <input type="text" className="inputforloginpage" placeholder="Password" required/>
                <button className="bttnforlogin" type="submit">log-In</button>
                </div>
               
                <div className="form-lower-part">
                <a href=""> Forget Password ?  </a>
                </div>
                
            </form>

            
        </div>

        </div>
            
        </>
    );
}

export default AdminLogin;