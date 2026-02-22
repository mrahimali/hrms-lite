import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <h1><Link to="/">HRMS</Link></h1>

      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/attendance">Attendance</Link>
      </div>
    </div>
  );
};

export default Navbar;