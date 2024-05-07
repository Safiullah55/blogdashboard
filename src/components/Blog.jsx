import React from "react";
import Header from "./Header1";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import $ from "jquery";

const Blog = () => {
  //!Add BLOG
  const Add = () => {
    var userId = sessionStorage.getItem("userId");

    var fileInput = document.getElementById("fileInput"); // Get the file input element by its ID
    var form = new FormData();
    form.append("", fileInput.files[0]); // Use the file input element to access selected file

    var settings = {
      url: "http://localhost:3000/upload",
      method: "POST",
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      data: form,
    };

    $.ajax(settings).done(function (response) {
      // console.log(JSON.parse(response));
      let imageURL = JSON.parse(response);
      let blogImage = imageURL.Record;
      // console.log(imageURL.Record);
      let blogHeading = $("#blogHeading").val();
      let blogDescription = $("#blogDescription").val();
      let date = $("#date").val();
      let createdBy = userId;
      var settings = {
        url: "http://localhost:3000/blog/addBlog",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          blogHeading: blogHeading,
          blogDescription: blogDescription,
          blogImage: blogImage,
          createdBy: createdBy,
          date: date,
        }),
      };

      $.ajax(settings).done(function (response) {
        // console.log(response);
      });
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
              <h3 className="text-primary">Blog Section</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <Link to="/blogtable">Your Blogs</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    AddBlog
                  </li>
                </ol>
              </nav>
              <div className="card">
                <div className="card-body">
                  <h3 className="text-primary mb-3">Add New Blog</h3>
                  <div className="d-flex flex-column">
                    <label className="mb-2 Caption">Image for Blog</label>
                    <input
                      className="mb-2 form-control "
                      type="file"
                      id="fileInput"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="Caption mb-2">Heading</label>
                    <input
                      className="mb-2 imgCaption form-control"
                      type="text"
                      id="blogHeading"
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="Caption mb-2">blog Description</label>
                    {/* <input className="mb-2 form-control " type=" text" /> */}
                    <textarea
                      className="form-control mb-2"
                      id="blogDescription"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div className="d-flex flex-column ">
                    <label className="Caption mb-2">Upload Date</label>
                    <input type="date" className="form-control" id="date" />
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-primary" onClick={Add}>
                      Add
                    </button>
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

export default Blog;
