import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Our Projects </h1>
      <h3 className="project-h3">
        WWS is an experienced company, across the years we have been honored to
        serve great companies which have permitted us to display their success
        made possible by the services we provided. Check out this awesome case
        studies.
      </h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="WWS\vonage.jpg"
              text="Solution: Technical Support Management."
              label="Vonage"
              path="/services"
            />
            <CardItem
              src="WWS\Movistar.jpg"
              text="Solutions: Network Technology Services, Vendor Management."
              label="Movistar"
              path="/services"
            />
            <CardItem
              src="WWS\Scotiabank.jpg"
              text="Solutions Provided: Vendor Management, Contract Management"
              label="Scotiabank"
              path="/services"
            />
          </ul>
          <h2 className="project-h2">Abudabi</h2>
          <ul className="cards__items">
            <CardItem
              src="WWS\2-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Andaz Capital Gate"
              path="/services"
            />
            <CardItem
              src="WWS\1-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Etihad Towers"
              path="/services"
            />
            <CardItem
              src="WWS\3-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Grand Hyatt"
              path="/services"
            />
          </ul>
          <h2 className="project-h2">Brasil</h2>
          <ul className="cards__items">
            <CardItem
              src="WWS\13-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Altino Arantes Buildingn"
              path="/services"
            />
            <CardItem
              src="WWS\14-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Birman Building"
              path="/services"
            />
            <CardItem
              src="WWS\15-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Sede do BankBosto"
              path="/services"
            />
          </ul>
          <h2 className="project-h2">Qatar</h2>
          <ul className="cards__items">
            <CardItem
              src="WWS\6-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Four Seasons Hotel Doha"
              path="/services"
            />
            <CardItem
              src="WWS\5-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Forty-Four West Bay Tower"
              path="/services"
            />
            <CardItem
              src="WWS\4-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Kempinski Residences"
              path="/services"
            />
          </ul>
          <h2 className="project-h2">Kuwait</h2>
          <ul className="cards__items">
            <CardItem
              src="WWS\Diseno-sin-titulo-5-q7tuyw8s3cjfkt4ar1epxeucx3gqqn7mojzur2ch74.jpg"
              text="Arabiya Tower"
              path="/services"
            />
            <CardItem
              src="WWS\7-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Arraya Tower"
              path="/services"
            />
            <CardItem
              src="WWS\8-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Panasonic Tower"
              path="/services"
            />
          </ul>
          <h2 className="project-h2">Venezuela</h2>
          <ul className="cards__items">
            <CardItem
              src="WWS\12-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Casa de la Moneda"
              path="/services"
            />
            <CardItem
              src="WWS\10-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Eurobuilding Hotel & Suites Caracas, Maiquetia"
              path="/services"
            />
            <CardItem
              src="WWS\11-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="Empresas Polar"
              path="/services"
            />
            <CardItem
              src="WWS\9-1-q7mwb9mak7vf0wfyeixt6hrlwjs4fk161qoqeprqj4.png"
              text="JW Marriott Hotel Caracas"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
