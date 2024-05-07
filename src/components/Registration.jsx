import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    var settings = {
      url: "http://localhost:3000/user/addUser",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  };
  return (
    <>
      <div className="register bg-primary">
        <div className="container">
          <div className="d-flex justify-content-center text-center ">
            <div className="card regForm mt-5 ">
              <div className="card-header p-4">
                <h3 className=" fw-medium">Create Account</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      class="form-control p-3"
                      placeholder="First Name "
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      class="form-control p-3"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Email"
                      className=" form-control p-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <input
                      type="password"
                      class="form-control p-3"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      onClick={register}
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <Link className="p-3" to="/login">
                      Have an account? Go to Login
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

export default Registration;
