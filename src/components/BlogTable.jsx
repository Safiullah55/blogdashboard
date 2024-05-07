import React from "react";
import BlogResponsiveTable from "./BlogResponsiveTable";
import Footer from "./Footer";
import Header from "./Header1";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SideNav />
      <div className="mainDashboard bg-body-tertiary ">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="text-primary fw-normal ">Blog Section</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <Link to="/"> Dashboard</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Blog Section
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-4">
                    <h2 className="text-primary">Your Blogs</h2>
                    <button className="btn btn-primary">
                      <Link className="nav-link" to="/blog">
                        + Add New
                      </Link>
                    </button>
                  </div>
                  <BlogResponsiveTable />
                </div>
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
