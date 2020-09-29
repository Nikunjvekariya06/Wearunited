import React from "react";
import { Grid } from "@material-ui/core";

function Footer() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "black",
          height: "230px ",
        }}
      >
        <Grid item lg={2}>
          <div className="footeritem-1">
            <p>Customer care</p>
            <div>
              <p>Contact Us</p>
              <p>Authentication</p>
              <p>Returns</p>
              <p>Shipping</p>
              <p>FAQ</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className="footeritem-2">
            <p>Buy </p>
            <div>
              <p>Order tracking</p>
              <p>Order tracking</p>
              <p>Pay in instalments</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className="footeritem-3">
            <p>Sell </p>
            <div>
              <p>How to Sell?</p>
              <p>Tips for sell</p>
              <p>Sell an item</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className="footeritem-4">
            <p>Rent </p>
            <div>
              <p>How to Rent?</p>
              <p>Items to rent</p>
              <p>Tips for rent</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className="footeritem-5">
            <p>Wear United </p>
            <div>
              <p>About Us</p>
              <p>Press</p>
              <p>Careers</p>
              <p>Business Sellers</p>
              <p>Become an influencer</p>
              <p>Invite your friends</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={2}>
          <div className="footeritem-6">
            <p>Top Fashion Brands </p>
            <div>
              <p>Chanel</p> <p>Hermés</p> <p>Louis Vuitton</p>{" "}
              <p>Christian Louboutin</p>
              <p>Prada</p>
              <p>Jimmy Choo</p>
              <p>Céline</p>
              <p>Valentino</p>
            </div>
          </div>
        </Grid>
        <div className="footer-second">
          <span>Terms and Conditions</span>
        </div>
      </Grid>
    </>
  );
}

export default Footer;
