import React, { useEffect } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import ResponsiveTable from "./ResponsiveTable";
import Footer from "./Footer";
import Header from "./Header1";
import SideNav from "./SideNav";

const Dashboard = () => {
  useEffect(() => {
    // Check for user authentication when the component mounts
    if (!sessionStorage.getItem("userId")) {
      // Redirect to the login page if not authenticated
      window.location.href = "/login"; // Change to your login page route
    }
  }, []);

  const labels = [
    "Aug 1",
    "Aug 3 ",
    "Aug 5",
    "Aug 7",
    "Aug 9",
    "Aug 11",
    "Aug 13",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        // label: "My First Dataset",
        data: [30000, 59000, 65000, 44000, 56000, 55000, 64000],
        fill: true,
        backgroundColor: "rgba(204,227,247,0.5)",
        borderColor: "rgba(13,110,253,1)",
        tension: 0.5,
        borderWidth: 2,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const barLabels = [
    "Jan ",
    "Feb ",
    "Mar ",
    "Apr ",
    "May ",
    "Jun ",
    "Jul",
    "Aug ",
    "Sep ",
    "Oct ",
    "Nov ",
    "Dec",
  ];
  const barData = {
    labels: barLabels,
    datasets: [
      {
        // label: "My First Dataset",
        data: [30000, 59000, 65000, 44000, 56000, 55000, 64000, 65000],
        backgroundColor: "rgb(13,110,253)",
        borderColor: "rgba(13,110,253,1)",
        borderWidth: 2,
      },
    ],
  };

  const barConfig = {
    type: "bar",
    data: barData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Header />
      <SideNav />
      <div className="mainDashboard">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Dashboard</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div class="card text-bg-primary mb-3">
                <div class="card-header">Primary Card</div>
                <div class="card-body ">
                  <p class="card-text dropdown-toggle">view details</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div class="card text-bg-warning text-light mb-3">
                <div class="card-header ">warning Card</div>
                <div class="card-body ">
                  <p class="card-text dropdown-toggle">view details</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div class="card text-bg-success mb-3">
                <div class="card-header ">success Card</div>
                <div class="card-body ">
                  <p class="card-text dropdown-toggle">view details</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div class="card text-bg-danger mb-3">
                <div class="card-header ">danger Card</div>
                <div class="card-body ">
                  <p class="card-text dropdown-toggle">view details</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-bar-chart-line-fill"></i> Area Chart
                  Example
                </div>
                <div className="card-body ">
                  <div className="chart-container">
                    <LineChart config={config} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="card">
                <div className="card-header">
                  <i className="bi bi-bar-chart-steps"> </i>Bar Chart Example
                </div>
                <div className="card-body">
                  {/* <BarChart width={480} height={300} data={data1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart> */}
                  <BarChart barConfig={barConfig} barLabels={barLabels} />
                </div>
              </div>
            </div>
          </div>
          <br />
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
