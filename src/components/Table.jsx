import React from "react";
import ResponsiveTable from "./ResponsiveTable";
import Footer from "./Footer";
import Header from "./Header1";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="mainDashboard">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Table</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <Link to="/"> Dashboard</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Table
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className=" row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <ResponsiveTable />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
