import React, { useEffect, useState } from "react";
import Header from "./Header1";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import $ from "jquery";

const Edit = () => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [blogImage, setBlogImage] = useState(null);
  const [blogHeading, setBlogHeading] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogDate, setBlogDate] = useState("");

  useEffect(() => {
    // This code will run when the component mounts

    // Parse the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get("id");

    // Check if myParams is not null
    if (myParams && !blogDetails) {
      // Create the AJAX request settings
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        blogId: myParams,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/blog/getBlogDetails", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          // console.log("the result is");

          // setBlogDetails(result);
          // setBlogDetails("the result state");
          setBlogDetails(result);
          setBlogHeading(result.Record.blogHeading);
          setBlogDescription(result.Record.blogDescription);
          setBlogDate(result.Record.createdAt);
        })
        .catch((error) => console.log("error", error));
    }
  }, [blogDetails]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setBlogImage(selectedImage);
    }
  };

  const handleHeadingChange = (event) => {
    setBlogHeading(event.target.value);
    // setBlogDetails((blogDetails.Record.blogHeading = event.target.value));
  };

  const handleDescriptionChange = (event) => {
    setBlogDescription(event.target.value);
    // setBlogDetails((blogDetails.Record.blogDescription = event.target.value));
  };
  const handleDateChange = (event) => {
    setBlogDate(event.target.value);
    // setBlogDetails((blogDetails.Record.createdAt = event.target.value));
  };

  const update = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParams = urlParams.get("id");
    let imageUrl = document.getElementById("fileInput").files[0];
    // console.log(imageUrl);
    var formdata = new FormData();
    if (imageUrl) {
      formdata.append("", imageUrl);
    }

    // let image = blogDetails.Record.blogImage;
    if (blogImage) {
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      fetch("http://localhost:3000/upload", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          let path = result.Record;
          let blogId = myParams;
          let blogHeading = $("#blogHeading").val();
          let blogDescription = $("#blogDescription").val();
          let createdAt = $("#date").val();
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            blogImage: path,
            blogId: blogId,
            blogHeading: blogHeading,
            blogDescription: blogDescription,
            createdAt: createdAt,
          });

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch("http://localhost:3000/blog/editBlog", requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
        })
        .catch((error) => console.log("error", error));
    }
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
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/blogtable">Your Blogs</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    UpdateBlog
                  </li>
                </ol>
              </nav>
              <div className="card">
                <div className="card-body">
                  <h3 className="text-primary mb-3">Update Blog</h3>

                  <div className="d-flex flex-column">
                    <label className="mb-2 Caption">Image for Blog</label>
                    <input
                      className="mb-2 form-control "
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <img
                      alt={blogDetails && blogDetails.Record.blogHeading}
                      id="updateImg"
                      src={
                        blogImage
                          ? URL.createObjectURL(blogImage)
                          : blogDetails && blogDetails.Record.blogImage
                      }
                    />
                  </div>

                  <div className="d-flex flex-column">
                    <label className="Caption mb-2">Heading</label>
                    <input
                      className="mb-2 imgCaption form-control"
                      type="text"
                      id="blogHeading"
                      value={blogHeading}
                      onChange={handleHeadingChange}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="Caption mb-2">blog Description</label>
                    <textarea
                      className="form-control mb-2"
                      id="blogDescription"
                      cols="30"
                      rows="10"
                      value={blogDescription}
                      onChange={handleDescriptionChange}
                    ></textarea>
                  </div>
                  <div className="d-flex flex-column ">
                    <label className="Caption mb-2">Upload Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      value={blogDate}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-primary" onClick={update}>
                      Update
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

export default Edit;
