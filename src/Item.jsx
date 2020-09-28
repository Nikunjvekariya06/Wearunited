import React from "react";
import bag from "./bag.png";

function Item() {
  const item = [
    { image: bag, name: "WEAR UNITED" },
    { image: bag, name: "PRADA" },
    { image: bag, name: "HERMES" },
    { image: bag, name: "SANDRO" },
    { image: bag, name: "CARTIER" },
    { image: bag, name: "BURBERRY" },
    { image: bag, name: "VALENTINO" },
    { image: bag, name: "OFF-WHITE" },
    { image: bag, name: "GIVENCHY" },
    { image: bag, name: "DOLCE & GABBANA" },
  ];
  return (
    <>
      <div className="main-Item-bar">
        <ul>
          {item.map((obj) => (
            <li className="item-bar">
              <img className="item-image" src={obj.image} alt="item" />
              <center>
                <p className="item-name">{obj.name}</p>
              </center>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Item;
