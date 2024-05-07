import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    var settings = {
      url: "http://localhost:3000/user/login",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      if (response.status === 200) {
        sessionStorage.setItem("userId", response.Record);
        // window.location.href = "/";
      } else {
        window.alert("user not Found");
      }
    });
  };
  return (
    <>
      <div className="login bg-primary">
        <div className="container">
          <div className="d-flex justify-content-center text-center ">
            <div className="card logForm mt-5 ">
              <div className="card-header p-4">
                <h3 className=" fw-medium">Login</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      class="form-control p-3"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      type="password"
                      placeholder="Password"
                      className=" form-control p-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3 mb-5">
                  <div className="col">
                    <div className="d-flex justify-content-start gap-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Remember Password
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <div className="d-flex justify-content-between">
                      <a href="!#">Forgot Password?</a>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={login}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <Link className="p-3" to="/register">
                      Need an account? Sign up!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
