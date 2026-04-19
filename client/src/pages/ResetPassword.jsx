import { Link, useNavigate} from "react-router-dom";
import { assets } from "../assets/assets.js";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";

const ResetPassword = () => {

  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);
  const {getUserData, isLoggedIn, userData, backendURL} = useContext(AppContext);

  axios.defaults.withCredentials = true;

  


  return (
      <div className="d-flex align-items-center justify-content-center vh-100 position-relative"
          style={{background: "linear-gradient(90deg, #6a5af9, #8268f9)", border: "none"}}>

          <Link to="/" className="position-absolute top-0 start-0 p-4 d-flex align-items-center gap-2 text-decoration-none">
              <img src={assets.logo} alt="Logo" height={32} width={32} />
              <span className="fw-bold fs-4 text-light">Authapp</span>
          </Link>  

          {/* Reset password card */}
          {!isEmailSent && (
              <div className="rounded-4 p-5 text-center bg-white" style={{width:'100%', maxWidth:'400px'}}>
                  <h4 className="mb-2">Reset Password</h4>
                  <p className="mb-4">Enter your registered email address</p>
                  <form>
                      <div className="input-group mb-4 bg-secondary bg-opacity-10 rounded-pill">
                          <span className="input-group-text bg-transparent border-0 ps-4">
                              <i className="bi bi-envelope"></i>
                          </span>
                          <input type="email"  
                                 className="form-control bg-transparent border-0 ps-1 pe-4 rounded-end" 
                                 placeholder="Enter email address"
                                 style={{height:'50px'}}
                                 onChange={(e) => setEmail(e.target.value)}
                                 value={email}
                                 required
                          />
                      </div>
                      <button className="btn btn-primary w-100 py-2" type="submit">
                          Submit
                      </button>
                  </form>
              </div>           
          )}

      </div>
  )
}

export default ResetPassword;