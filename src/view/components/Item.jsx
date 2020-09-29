import React from "react";
import bag from "../../assests/images/bag.png";

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
  console.log(item);
  return (
    <>
      <div className="main-Item-bar">
        <ul>
          {item.map((obj, index) => (
            <li key={index} className="item-bar">
              <img className="item-image" src={obj.image} alt="item" />
              <p className="item-name">{obj.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Item;
