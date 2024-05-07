import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 ">
          <div className="card bg-light border-0 rounded-0">
            <div className="card-head d-flex justify-content-between p-2 m-2">
              <div>
                <p>Copyright © Your Website 2023</p>
              </div>
              <div>
                <ul className="d-flex gap-3">
                  <li className="nav-link">
                    <a href="!#">Privacy Policy</a>
                  </li>
                  <li className="nav-link">
                    <a href="!#">Terms & Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
