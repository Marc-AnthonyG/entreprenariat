import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import VideoItem from "./VideoItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Qui sommes nous?</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              text="Chez Politique 360, notre mission est de réduire l'abstention de vote des jeunes en milieu rural. Nous comptons réussir en leur garantissant un accès à de l'information neutre et informative.  Notre but est de créer et de réunir le contenu politique venant du Québec, et ce, sans avoir de partie prix pour aucune opinion ou groupe politique."
              label="Notre mission"
            />
            <CardItem
              text="Pour nos fondateurs, il était très important que l’égalité des opinions soit le fondement de la plateforme. C’est pourquoi, ici, tous les points de vue sont diffusés sans censure! Toute information est recensée et accessible sur un pied d’égalité. Chaque utilisateur peut donc se faire sa propre idée et apprendre à connaitre le spectre politique qui l’entoure."
              label="Nos valeurs"
            />
          </ul>
          <VideoItem label="Démonstration" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
