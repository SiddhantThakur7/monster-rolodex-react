import React from "react";
import "./card-list.styles.css";
import {Card} from '../card/card.component';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <h2 key={monster.id}> <Card monster = {monster} /> </h2>
      ))}
    </div>
  );
};
