import React from "react";
import {NavLink,Outlet} from "react-router-dom";
export default function Home(params) {
 
  return (
    <>
      <div className="flex">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" h="#">
            Book
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <NavLink
                    
                  style={({ isActive }) => {
                    return {
                        textDecoration:'none',
                        margin:'10px',
                      color: isActive ? "red" : "Black",
                    };
                  }}
                  to={`/`}
                >
                  Dashboard
                </NavLink>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
      <div >
            <Outlet{...params}/>
      </div>
    </>
  );
}
