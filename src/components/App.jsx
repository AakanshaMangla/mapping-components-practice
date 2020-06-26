import React from "react";
import Card from "./card";
import emojipedia from "../emojipedia";

//1.create card component
//2.create props in card.jsx to replace hardcoded data
//3.Import emojipedia constant
//4.Map through emojipedia arraya nd render components

function createCard(emojipedia) {
  //you can use nay object name other than emojipedia
  return (
    <Card
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
