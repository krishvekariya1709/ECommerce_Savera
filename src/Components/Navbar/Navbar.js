import React from "react";
import "./Navbar.css";
// import from Assets
import logo from "../Assets/BrandLogo.webp";
//import from Font Awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faUser,faCartShopping} from "@fortawesome/free-solid-svg-icons";

// import from MUI
import { Grid } from "@mui/material";
import Badge from '@mui/material/Badge';
export default function Navbar() {

  return (
    
    <div className="navbar d-flex">
    <Grid container spacing={2} columns={16}>
      <Grid item xs={4}>
        <div className="navbar brand-logo">
          <img src={logo} alt="Logo"></img>
        </div>
      </Grid>
      <Grid item xs={8} className="d-flex justify-content-center">
      <div className="navbar d-flex  ">
        <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link fs-6" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              ANARKALI SUITE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              LEHENGA CHOLI
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              KURTI SET
            </a>
          </li>
        
        </ul>
      </div>
        </Grid>
      <Grid item xs={4} className="d-flex justify-content-center">
        <div className="navbar search-icon mx-3 ">
        <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
        </div>
        <div className="navbar signup-icon mx-3">
        <FontAwesomeIcon icon= {faUser} />
        </div>
        <div className="navbar cart-icon mx-3" >
        <Badge badgeContent={1} color="primary" variant="dot">
        <FontAwesomeIcon className="fa-1x"icon={faCartShopping}  />
        </Badge>
        </div>
            
        </Grid>
    </Grid>
    <hr></hr>
    </div>
  );
}
