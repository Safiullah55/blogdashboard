import React from "react";
import Header from "./Header1";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const UpdateWebsite = () => {
  // Add an event listener to the color input element

  const ColorPicker = () => {
    const colorInput = document.getElementById("colorInput");
    const colorCodeDisplay = document.getElementById("colorCodeDisplay");
    colorInput.addEventListener("input", function () {
      // Get the selected color from the input element
      const selectedColor = colorInput.value;

      // Update the content of the colorCoder div with the selected color code
      colorCodeDisplay.textContent = `${selectedColor}`;
    });
  };

  const HighlightPicker = () => {
    const colorInput = document.getElementById("highlightInput");
    const colorCodeDisplay = document.getElementById("highlightCodeDisplay");
    colorInput.addEventListener("input", function () {
      // Get the selected color from the input element
      const selectedColor = colorInput.value;

      // Update the content of the colorCoder div with the selected color code
      colorCodeDisplay.textContent = `${selectedColor}`;
    });
  };
  const SecondaryPicker = () => {
    const colorInput = document.getElementById("secondaryInput");
    const colorCodeDisplay = document.getElementById("secondaryCodeDisplay");
    colorInput.addEventListener("input", function () {
      // Get the selected color from the input element
      const selectedColor = colorInput.value;

      // Update the content of the colorCoder div with the selected color code
      colorCodeDisplay.textContent = `${selectedColor}`;
    });
  };

  return (
    <>
      <Header />
      <SideNav />
      <div className="blog mainDashboard bg-body-tertiary ">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-primary">Update Your Website</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Web Update
                  </li>
                </ol>
              </nav>

              <div className="card">
                <div className="card-body">
                  <h3 className="text-primary mb-3">Color Selection</h3>
                  <div className="d-flex flex-column">
                    <label className="mb-2 Caption">Choose Primary Color</label>
                    <div className="card mb-2 d-flex flex-row">
                      <input
                        className="mb-2 form-control colorPicker "
                        type="color"
                        id="colorInput"
                        onChange={ColorPicker}
                      />

                      <div
                        className="card-body colorCoder"
                        id="colorCodeDisplay"
                      ></div>
                    </div>
                  </div>

                  <div className="d-flex flex-column">
                    <label className="mb-2 Caption">
                      Highlighted Primary Color (dark)
                    </label>
                    <div className="card mb-2 d-flex flex-row">
                      <input
                        className="mb-2 form-control colorPicker "
                        type="color"
                        id="highlightInput"
                        onChange={HighlightPicker}
                      />

                      <div
                        className="card-body colorCoder"
                        id="highlightCodeDisplay"
                      ></div>
                    </div>
                  </div>

                  <div className="d-flex flex-column">
                    <label className="mb-2 Caption">
                      Choose Secondary Color
                    </label>
                    <div className="card mb-2 d-flex flex-row">
                      <input
                        className="mb-2 form-control colorPicker "
                        type="color"
                        id="secondaryInput"
                        onChange={SecondaryPicker}
                      />

                      <div
                        className="card-body colorCoder"
                        id="secondaryCodeDisplay"
                      ></div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <button className="btn btn-primary">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-primary mb-3">Image Selection</h3>
                  <div className="d-flex">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <div className="d-flex flex-column">
                          <label className="mb-2 Caption">
                            Choose Logo for your company
                          </label>
                          <div className=" mb-2 ">
                            <input className="mb-2 form-control " type="file" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="d-flex flex-column">
                          <label className="mb-2 Caption">
                            Choose Hero Section Background
                          </label>
                          <div className="mb-2 ">
                            <input className="mb-2 form-control " type="file" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="d-flex flex-column">
                          <label className="mb-2 Caption">
                            Choose Why Us Section Background
                          </label>
                          <div className=" mb-2 ">
                            <input className="mb-2 form-control " type="file" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="row">
                      <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <div className="d-flex flex-column">
                          <label className="mb-2 Caption">
                            Choose Logo for About Section
                          </label>
                          <div className=" mb-2 ">
                            <input className="mb-2 form-control " type="file" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="d-flex flex-column">
                          <label className="mb-2 Caption">
                            Choose Image for Services
                          </label>
                          <div className="mb-2 ">
                            <input className="mb-2 form-control " type="file" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <button className="btn btn-primary">Update</button>
                  </div>
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

export default UpdateWebsite;
