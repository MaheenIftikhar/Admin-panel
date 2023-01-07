import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Login.css";
const Login = () => {
  
  return (
    <div className="login">
      <div className="login__wrapper">
        <h2 className="login__title">Login</h2>

        <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white">
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              
              

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                
              </div>

              <div>

              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
               
              </div>
</div>
              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <Link to="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></Link>
                <Link to="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></Link>
                <Link to="#!" className="text-white"><i className="fab fa-google fa-lg"></i></Link>
              </div>

            </div>

            <div>
            <p className="small mb-5 pb-lg-2"><Link className="text-white-50" to="#!">Forgot password?</Link></p>
            </div>

          </div>
        </div>
      </div>
    </div>
 
</section>

</div>
</div>
  )
}

export default Login