import React from 'react'
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Login = () => {
  return (
      <div className="position-relative min-vh-100 d-flex justify-content-center align-items-center" 
          style={{background: "linear-gradient(90deg, #6a5af9, #8268f9)", border: "none"}}>
 
          <div style={{position: "absolute", top: "20px", left: "30px", display: "flex", alignItems: "center"}}>
              <Link to="/" style={{
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "24px",
                  textDecoration: "none",
                }}>
                  <img src={assets.logo} alt="Logo" height={32} width={32} />
                  <span className="fw-bold fs-4 text-light">Authapp</span>
              </Link>

          </div>
          <div className="card p-4" style={{ maxWidth: "400px", width: "100%" }}   >
              <h2 className="text-center mb-4">
                  Login
              </h2>
          
              <form>
                  <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Id</label>
                      <input type="text"
                             id="email"
                             className="form-control"
                             placeholder="Enter email"
                             required
                      />
                  </div>

                  <div className="mb-3">
                      <label htmlFor="password" className="form-label"> Password </label>
                      <input type="password"
                             id="password"
                             className="form-control"
                             placeholder="************"
                             required
                      />
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                      <Link to="/reset-password" className="text-decoration-none">
                          Forgot password?
                      </Link>
                  </div>

                  <button type='submit' className='btn btn-primary w-100'>
                      Login
                  </button>
             </form>
          </div>
      </div>
    )
}

export default Login;