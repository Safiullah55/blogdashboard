import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../images/logo.png";
import "./SideNav";
import "./Dashboard";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  function handletoggle() {
    setToggle(!toggle);
  }
  const toggleSideNav = ({ histroy }) => {
    const sideMenu = document.querySelector(".SideNav");
    const fullScreen = document.querySelector(".mainDashboard");
    const fullFooter = document.querySelector(".footer");
    if (sideMenu) {
      sideMenu.classList.toggle("show");
    }
    if (fullScreen) {
      fullScreen.classList.toggle("fullScreen");
    }
    if (fullFooter) {
      fullFooter.classList.toggle("fullScreen");
    }
  };
  const toggleMode = () => {
    const light = document.querySelector(".header");
    const icon = document.querySelectorAll(".icon");
    const sidenav = document.querySelector(".SideNav");

    if (light) {
      light.classList.toggle("light");
    }
    if (icon) {
      icon.forEach((e) => {
        e.classList.toggle("light");
      });
      // icon.classList.toggle("light");
    }
    if (sidenav) {
      sidenav.classList.toggle("light");
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="header w-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex">
            <div className="logo  d-flex align-items-center py-2 gap-1 w-100  ">
              <img className="LogoImg" src={Logo} alt="logo" />

              <h4 className="fs-5 text-primary ">Admin Panel</h4>
              <span>
                <i
                  className="toggleBtn fs-4 bi bi-justify"
                  onClick={toggleSideNav}
                ></i>
              </span>
            </div>
            {/* <div className="text-dark d-flex gap-4 align-items-center rounded-2 ">
              <div className=" d-flex gap-5  ">
                <span className="d-flex justify-content-center align-items-center headIcon">
                  <i
                    className="icon bi bi-sun text-warning"
                    onClick={toggleMode}
                  ></i>
                </span>
                <span className="icon d-flex justify-content-center align-items-center headIcon ">
                  <i className="bi bi-gear-fill"></i>
                </span>
              </div>
              <div className="dropdown">
                <span
                  className="icon btn bg-transparent dropdown-toggle"
                  role="button"
                  onClick={handletoggle}
                >
                  <i className="fs-5 bi bi-person-fill"></i>
                </span>
                <div className="parent">
                  <div className={`child ${toggle ? "active" : ""}`}>
                    <ul className="drop text-start">
                      <li>Activity</li>
                      <li>Profile</li>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="search text-dark gap-3 d-flex align-items-center rounded-2 ">
              <div className="d-flex gap-4">
                <span className="p-3 headIcon">
                  <i
                    className="icon bi bi-sun text-warning"
                    onClick={toggleMode}
                  ></i>
                </span>
                <span className="p-3 headIcon">
                  <i className="icon bi bi-gear-fill"></i>
                </span>
              </div>
              <div className="dropdown">
                <span
                  className="icon btn bg-transparent"
                  role="button"
                  onClick={handletoggle}
                >
                  {/* <img className="profileImg" src={profile} alt="Profile" /> */}
                  <i className="icon fs-5 bi bi-person-fill dropdown-toggle "></i>
                </span>
                <div className="parent">
                  <div className={`child ${toggle ? "active" : ""}`}>
                    <ul className="drop text-start">
                      <li>Activity</li>
                      <li>Profile</li>
                      <li onClick={handleLogout}>Logout</li>
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

export default Header;
