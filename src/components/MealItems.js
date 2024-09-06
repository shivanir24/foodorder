import React from "react";
import MealItemForm from "./MealItemForm";
import styles from"./MealItems.module.css";

export default function MealItems(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
          {/* meal form for adding meals into cart */}
          <MealItemForm/>
      </div>
    </li>
  );
}
