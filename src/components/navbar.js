import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
export default function Navbar() {
  console.log()
  return (
    <>
      <div className="flex">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Book
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link className="links" to="/">Dashboard</Link>

              <Link className="links" to="add">Add</Link>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
