import React, { Component } from "react";
import Card from "../../components/card/Card";
import "./Catalog.css";

class Catalog extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "Citrus Beer",
        quantity: "330ml",
        alcohol: "9.5%",
        image:
          "https://www.beergium.com/7190-big_default/dugges-interboro-33cl.jpg"
      },
      {
        id: 2,
        name: "Coco Nut",
        quantity: "330ml",
        alcohol: "6.2%",
        image:
          "https://www.beergium.com/7432-big_default/dugges-six-ways-coco-nut-33cl.jpg"
      },

      {
        id: 3,
        name: "Sun Mosaic",
        quantity: "330ml",
        alcohol: "6.2%",
        image:
          "https://www.beergium.com/7176-big_default/dugges-sun-mosaic-33cl.jpg"
      },
      {
        id: 4,
        name: "Boxed Idjit",
        quantity: "330ml",
        alcohol: "6.2%",
        image:
          "https://www.beergium.com/7425-big_default/dugges-boxed-idjit-33cl.jpg"
      }
    ]
  };

  render() {
    const { data } = this.state;

    return (
      <div className="catalog">
        <h1>CATALOG</h1>
        {data.map(item => (
          <Card key={item.id} content={item} />
        ))}
      </div>
    );
  }
}

export default Catalog;
