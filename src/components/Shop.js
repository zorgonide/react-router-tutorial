import React, { useState, useEffect } from 'react'
import gql from "graphql-tag";
import request from "../utils/request";
import {ships as items} from "./listofships";

function Shop() {
    useEffect(() => {
      fetchShips();
    }, []);

    const [items, setItems] = useState([]);

    const fetchShips = async () => {
      var data = await request(gql`
        {
          ships {
            name
            home_port
            image
          }
        }
      `);
    var items = await JSON.stringify(data);
    items = JSON.parse(items);
    console.log("DATA")
    console.log(data) 
    console.log("ITEMS")
    console.log(items);
    setItems(items.data);
    console.log("Chek")
    console.log(data.data.ships[0].name);
    console.log(items.data.ships[0].name);

    // console.log(items.data.ships[0].name);

    };
    console.log("HELL")
    console.log(items)
    return(
      <div>
        <h1>Shop Page</h1>
        {
        // JSON.stringify(items.ships)
        items.ships.map(item => (
          <p>{item.name}</p>
        ))}
      </div>
    )
}
export default Shop;
