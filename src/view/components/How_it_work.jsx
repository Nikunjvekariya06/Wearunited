import React from "react";
import { Grid } from "@material-ui/core";
import bag from "../../assests/images/bag.png";
function Howitwork() {
  return (
    <>
      <Grid container>
        <Grid item md={6} sm={12} lg={6}>
          <div className="main-work-block">
            <div className="work">
              <p>How Does It Work?</p>
            </div>
            <div className="sell_block">
              <ul>
                <li className="heading-name sell">SELL</li>
                <li className="heading-name buy">BUY</li>
                <li className="heading-name rent">RENT</li>
              </ul>
            </div>
            <Grid container spacing={3} className="content-block">
              <Grid item md={4} sm={4} lg={4}>
                <center>
                  <img src={bag} height="54px" width="36px" alt="discount" />
                  <p className="sub-content">
                    Upload pictures of your article, fill the form,and that's
                    it!
                  </p>
                </center>
              </Grid>
              <Grid item md={4} sm={4} lg={4}>
                <center>
                  <img
                    src={bag}
                    height="54px"
                    width="36px"
                    ml={5}
                    alt="discount"
                  />
                  <p className="sub-content">
                    You have sold an item! Pack it very lovingly, we will send
                    you the tag,and X will do the rest.
                  </p>
                </center>
              </Grid>
              <Grid item md={4} sm={4} lg={4}>
                <center>
                  <img
                    src={bag}
                    height="54px"
                    width="36px"
                    ml={5}
                    alt="discount"
                  />
                  <p className="sub-content">
                    Sell and earn up to 85% of the sale price.
                  </p>
                </center>
              </Grid>
              <button className="learn-button">Learn more</button>
            </Grid>
          </div>
        </Grid>
        <Grid item md={6} sm={12} lg={6} className="main-right-block">
          <p className="right-text">
            Shop for <br></br>designer <br></br>product
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default Howitwork;
