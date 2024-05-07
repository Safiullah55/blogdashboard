import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import Footer from "./Footer";
import Header from "./Header1";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

const Charts = () => {
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
        label: "My First Dataset",
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
              <h1>Charts</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Charts
                  </li>
                </ol>
              </nav>
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
                  <BarChart barConfig={barConfig} barLabels={barLabels} />
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

export default Charts;
