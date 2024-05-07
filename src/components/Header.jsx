import React from "react";
// import { Link } from "react-router-dom";
// import Dropdown from "./js/Dropdown";

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex">
            <div className="logo text-light d-flex align-items-center py-2 w-100 ">
              <h4 className="fs-5">Point of Salary</h4>
              <span>
                <i className="fs-4 bi bi-justify"></i>
              </span>
            </div>
            <div className="search text-dark d-flex align-items-center rounded-2 ">
              <div className="d-flex">
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                  <div class="input-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Search for..."
                      aria-label="Search for..."
                      aria-describedby="btnNavbarSearch"
                    />
                    <button
                      class="btn btn-primary"
                      id="btnNavbarSearch"
                      type="button"
                    >
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="dropdown">
                <span
                  className="icon btn bg-transparent text-light dropdown-toggle"
                  role="button"
                >
                  <i className=" fs-5 bi bi-person-fill"></i>
                </span>
                <div className="parent">
                  <div className="child ">
                    <ul className="drop ">
                      <li className="nav-link">Activity Log</li>
                      <li className="nav-link">Profile</li>
                      <li className="nav-link">Logout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
let child = document.querySelector(".child");
let icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  child.classList.toggle("active");
});
export default Header;
