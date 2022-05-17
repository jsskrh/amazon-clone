import React, { useState } from "react";
import "./Login.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

function useToggle(initState = false) {
  const [state, setState] = React.useState(initState);
  return [state, (_) => setState(!state)];
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginContinue = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const loginRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  const [dropdownMenu, toggleDropdown] = useToggle(true);

  return (
    <div className="login-page container">
      <div className="login-container">
        <div className="login-top">
          <div className="login-logo-container">
            <Link to="/">
              <img
                className="login-logo"
                src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
              />
            </Link>
          </div>
          <div className="login-form-container">
            <form>
              <div className="login-form">
                <div className="login-form-inner">
                  <h1 className="title">Sign-In</h1>
                  <div className="row email-container">
                    <label>Email or mobile phone number</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row password-container">
                    <div className="password-label">
                      <label>Password</label>
                      <span className="forgot-password-span">
                        <a href="#" className="forgot-password-link a-light">
                          Forgot your password?
                        </a>
                      </span>
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="row button-container">
                    <button
                      onClick={loginContinue}
                      className="login-continue"
                      type="submit"
                    >
                      Continue
                    </button>
                    {/* <button>Sign-in</button> */}
                    <p className="terms-and-policies">
                      By continuing, you agree to Amazon's{" "}
                      <a href="#" className="a-light">
                        Conditions of Use
                      </a>{" "}
                      and
                      <a href="#" className="a-light">
                        {" "}
                        Privacy Notice
                      </a>
                      .
                    </p>
                  </div>
                  <div className="row">
                    <div className="expander-container">
                      <Arrow
                        clicked={dropdownMenu}
                        onClick={toggleDropdown}
                        collapse={<ArrowRightIcon className="arrow-right" />}
                        expand={<ArrowDropDownIcon className="arrow-down" />}
                      />
                      <span>
                        <a href="#" className="a-light expander-text">
                          Need help?
                        </a>
                      </span>
                    </div>
                    <Dropdown
                      clicked={dropdownMenu}
                      collapse={null}
                      expand={
                        <div className="dropdown-inner">
                          <span>
                            <a href="#" className="a-light">
                              Forgot your password?
                            </a>{" "}
                          </span>
                          <span>
                            <a href="#" className="a-light">
                              Other issues with Sign-in
                            </a>{" "}
                          </span>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="create-account-container">
            <div className="create-account-label-container">
              <div className="grey-line"></div>
              <span>New to Amazon?</span>
              <div className="grey-line"></div>
            </div>
            <button
              type="submit"
              onClick={loginRegister}
              className="login-register"
            >
              Create your Amazon account
            </button>
          </div>
        </div>
        <div className="login-bottom">
          <div className="divider-container">
            <div className="divider-inner">
              <div className="divider"></div>
            </div>
          </div>
          <div className="footer-links">
            <span>
              <a href="#" className="a-light">
                Conditions of Use
              </a>
            </span>
            <span>
              <a href="#" className="a-light a-middle-margin">
                Privacy Notice
              </a>
            </span>
            <span>
              <a href="#" className="a-light">
                Help
              </a>
            </span>
          </div>
          <div>
            <span className="bottom-text">
              © 1996-2022, Amazon.com, Inc. or its affiliates
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow({ clicked, onClick, expand, collapse }) {
  return (
    <div className="arrow" onClick={onClick}>
      {clicked ? collapse : expand}
    </div>
  );
}

function Dropdown({ clicked, expand, collapse }) {
  return <div className="dropdown">{clicked ? collapse : expand}</div>;
}

export default Login;
