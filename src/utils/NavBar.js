import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import propTypes from "prop-types";

const menu = [
  {
    title: "Home",
    baseUrl: "https://www.google.com",
  },
  {
    title: "About",
    baseUrl: "/",
  },
  {
    title: "Services",
    baseUrl: "/",
    forClass: "drop",
    dpd: [
      { title: "Contact Us", baseUrl: "/" },
      { title: "Contact Us", baseUrl: "/" },
      { title: "Contact Us", baseUrl: "/" },
    ],
  },
  {
    title: "Contact Us",
    baseUrl: "/",
  },
];

function Menu(props) {
  return (
    <>
      {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={`${props.url}/
          `}>{props.title}</a>
        </li> */}
    </>
  );
}

export default function NavBar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* {menu.map((m) => <Menu title = {m.title}   url={m.baseUrl}/>)} */}
              {menu.map((m) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={`${m.url}/`}
                  >
                    {m.title}
                  </a>
                 {m.dpd?<ul  className="dropdowm">
                   {m.dpd ? m.dpd.map((mn) =>  <li>{mn.title}</li>) : null}
                 </ul>
                 :null }
                
                 
                </li>
              ))}

              {/* {menu.map((m) => (
                <Menu />
              ))} */}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  title: "My Navbar",
};
NavBar.defaulProps = {
  title: "Nav",
};
