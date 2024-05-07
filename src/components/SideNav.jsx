import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  //!CHARTS
  const handleCharts = () => {
    navigate("/charts");
  };

  //!TABLE
  const handleTable = () => {
    navigate("/table");
  };

  return (
    <div className="SideNav">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-8">
            <br />

            <ul className="menu p-0 text-white">
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-speedometer "></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-globe-central-south-asia"></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/webupdate">
                    Website
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-people "></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Team
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className=" bi bi-person-vcard"></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Contact
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-wallet2 "></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Welcome Cards
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-clock "></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Counter
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-star-fill "></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Review
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-credit-card-2-front-fill"></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/blogtable">
                    Blog
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-card-list"></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Why Us
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-gear-wide-connected"></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Services
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-briefcase-fill"></i>
                <p className="dashboard">
                  <Link className="nav-link" to="/">
                    Projects
                  </Link>
                </p>
              </li>
              <li className="d-flex mb-3 gap-2">
                <i className="bi bi-bar-chart-steps"></i>
                <p className="charts" onClick={handleCharts}>
                  Charts
                </p>
              </li>
              <li className="d-flex gap-2">
                <i className="bi bi-table"></i>
                <p className="tables" onClick={handleTable}>
                  Tables
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
