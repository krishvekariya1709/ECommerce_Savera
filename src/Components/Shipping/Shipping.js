import React from "react";
import "./Shipping.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons/faTruckFast";
import { faHeadset,faRotateRight ,faShieldHalved} from "@fortawesome/free-solid-svg-icons";
// import from MUI
import { Grid } from "@mui/material";

export default function Shipping() {
  return (
    <div className="container my-5">
      <Grid container spacing={2} columns={12} >
        <Grid item xs={3}className="flex-column">
          <FontAwesomeIcon icon={faTruckFast} className="my-2" />
          <p className="fw-semibold">FREE SHIPPING</p>
          <p className="fw-light fs-6 mx-3">Free Shipping All Over India. Worldwide Shipping Available With Charges</p>
        </Grid>
        <Grid item xs={3} className="flex-column">
        <FontAwesomeIcon icon={faHeadset} className="my-2"/>
          <p className="fw-semibold">SUPPORT 24/7</p>
          <p className="fw-light fs-6 mx-3">Contact Us From Monday To Saturday Except Holiday During 10 Am To 7 PM</p>
        </Grid>
        <Grid item xs={3} className="flex-column">
        <FontAwesomeIcon icon={faRotateRight} className="my-0"/>
          <p className="fw-semibold">EASY REPLACEMENT</p>
          <p className="fw-light fs-6 mx-3">Simply Replacement Or Exchange Policy. Contact on :<b> 8160295041 </b></p>
        </Grid>
        <Grid item xs={3} className="flex-column">
        <FontAwesomeIcon icon={faShieldHalved} className="my-0"/>
          <p className="fw-semibold">SECURE PAYMENT</p>
          <p className="fw-light fs-6 mx-4">Cash On Delivery And Prepaid Payment Option Avalible.</p>
        </Grid>
        
      </Grid>
    </div>
  );
}
