import React from "react";
import { Grid } from "@material-ui/core";
import img1 from "../../assests/images/img-1.jpg";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
class ProductList extends React.Component {
  render() {
    const data = [
      {
        profile: "https://picsum.photos/200",
        name: "Jayne",
        productImg: img1,
        productName: "GUCCI",
        ProductSub: "Silk vircose faille",
        price: "90",
        rent: "52",
        size: "XXL",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Emily",
        productImg: img1,
        productName: "SAINT LAURENT",
        ProductSub: "Mid-length dress",
        price: "",
        rent: "172",
        size: "XXL",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Savannah",
        productImg: img1,
        productName: "DIOR",
        ProductSub: "Leather handbag",
        price: "95",
        rent: "150",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Olivia",
        productImg: img1,
        productName: "SAINT LAURENT",
        ProductSub: "Mid-length dress",
        price: "2000",
        rent: "53",
        size: "XS",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Elizabeth",
        productImg: img1,
        productName: "ROLEX",
        ProductSub: "Air king watch",
        price: "2000",
        rent: "700",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Suzie",
        productImg: img1,
        productName: "HERMES",
        ProductSub: "Birkin 30 leather handba",
        price: "10,134.53",
        rent: "2000",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Jane",
        productImg: img1,
        productName: "SALVATORE FERRAGAMO",
        ProductSub: "Silk handkerchief",
        price: "",
        rent: "48",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Isabel",
        productImg: img1,
        productName: "BURBERRY",
        ProductSub: "Silk scraf",
        price: "360",
        rent: "128",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Kate",
        productImg: img1,
        productName: "CONVERSE",
        ProductSub: "Cloth trainers",
        price: "349",
        rent: "",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Yoori",
        productImg: img1,
        productName: "CHLOE",
        ProductSub: "Ring",
        price: "890",
        rent: "320",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Liiz",
        productImg: img1,
        productName: "ACNE STUDIOS",
        ProductSub: "Leather jacket",
        price: "",
        rent: "98",
        size: "XS",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Adah",
        productImg: img1,
        productName: "CARTIER",
        ProductSub: "Rings",
        price: "410",
        rent: "121",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Cecillia",
        productImg: img1,
        productName: "ENVII",
        ProductSub: "Mini skirt",
        price: "63",
        rent: "",
        size: "M",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Selah",
        productImg: img1,
        productName: "GUCCI",
        ProductSub: "Leather handbag",
        price: "243",
        rent: "112",
        size: "",
      },
      {
        profile: "https://picsum.photos/200",
        name: "Nova",
        productImg: img1,
        productName: "DIOR",
        ProductSub: "Silk viscose faille",
        price: "150",
        rent: "65",
        size: "",
      },
    ];
    return (
      <React.Fragment>
        <Grid container style={{ padding: "23px 0px 20px 45px" }}>
          {data.map((obj, index) => (
            <Grid key={index} item sm={12} md={3} lg={2} className="cards">
              <div>
                <div className="card-product">
                  <img
                    className="profile-image"
                    src={obj.profile}
                    alt="profile pic"
                  />
                  <span className="profile-name">{obj.name}</span>
                  <span className="follow">Follow</span>
                  <img
                    className="card-image"
                    src={obj.productImg}
                    alt="product"
                  />
                  <span className="product-main-name">{obj.productName}</span>
                  <span className="heart-icon">
                    <FavoriteBorderOutlinedIcon />
                  </span>

                  <p className="product-sub-name">{obj.ProductSub}</p>
                  <p className="buy-price">Buy ${obj.price}</p>
                  <span className="size">
                    {obj.size}
                    <h6>SIZE</h6>
                  </span>
                  <p className="rent-price">Rent from ${obj.rent}/week</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default ProductList;
