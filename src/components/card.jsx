import React from "react";
import { Card } from "react-bootstrap";
export default function Cardl(props) {
  return (
    <div className="card">
      <h1 className="text-white">{props.name}</h1>
      <div>
        {props.types.map(type => {
          return <span className={`types ${type}`}>{type}</span>;
        })}
      </div>
      <img src={props.image} alt="pokemon" className="ajust" />
      <div className="list">
        <ul className="list-group list">
          <li className="list-group-item ">Puntos de vida: {props.base.HP}</li>
          <li className="list-group-item ">Ataque: {props.base.Attack}</li>
          <li className="list-group-item ">Defensa: {props.base.Defense}</li>
          <li className="list-group-item ">Velocidad: {props.base.Speed}</li>
        </ul>
        {/* <ul>
          <li><h3>Hp: {props.base.HP}</h3></li>
          <hr/>
          <li>Ataque: {props.base.Attack}</li>
          <hr/>
          <li>Defensa: {props.base.Defense}</li>
          <hr/>
          <li>Velocidad: {props.base.Speed}</li>
        </ul> */}
      </div>
      
      <div> 
    <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    </div>
  );
}