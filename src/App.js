import "./App.css";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Charts from "./components/Charts";
import Table from "./components/Table";
import BlogTable from "./components/BlogTable";
import Blog from "./components/Blog";
import UpdateWebsite from "./components/UpdateWebsite";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Registration} />
          <Route path="/charts" Component={Charts} />
          <Route path="/table" Component={Table} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/blog" Component={Blog} />
          <Route path="/blogtable" Component={BlogTable} />
          <Route path="/edit" Component={Edit} />
          <Route path="/webupdate" Component={UpdateWebsite} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
