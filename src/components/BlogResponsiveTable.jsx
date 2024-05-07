import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function DataTableExample() {
  //!GET ALL BLOGS

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch("http://localhost:3000/blog/allBlogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.Record);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="dataTable">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Description</th>
                      <th scope="col">Upload Date</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogs.map((blog, index) => (
                      <tr key={blog.id}>
                        <td className="m-2 p-2">{index + 1}</td>
                        <td className="m-2 p-2">{blog.blogHeading}</td>
                        <td className="m-2 p-2">
                          {blog.blogDescription.slice(0, 11) + "..."}
                        </td>
                        <td className="m-2 p-2">{blog.createdAt}</td>
                        <td className="m-2 p-2">
                          <img src={blog.blogImage} alt="blogImage" />
                        </td>
                        <td className="m-2 ">
                          <div className="m-2 d-flex gap-1 align-items-center">
                            <a
                              className="btn btn-primary"
                              id="edit"
                              href={`/edit?id=${blog.blogId}`}
                            >
                              Edit
                            </a>
                            <button className="m-2 btn btn-danger" id="delete">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <table
                  id="example"
                  class="table table-striped"
                  //   style="width:100%"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Heading</th>
                      <th>Description</th>
                      <th>Upload Date</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTableExample;
