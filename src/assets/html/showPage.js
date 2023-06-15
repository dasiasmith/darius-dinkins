import React from "react";
import { shows } from "../../data"; // Assuming the data.js file is in the same folder as ShowPage.js

export default function ShowPage() {
  return (
    <div className="show-page">
      <h1>SHOWS</h1>
      {shows.map((show) => (
        <div key={show.day} className="show-item">
          <div className="show">
            <div className="date">
                <p>{show.month}<span>{show.day}</span></p>
            </div>
            <div className="location">
                <h3>{show.location}</h3>
                <p className="black-box yellow-text">{show.time}</p>
            </div>
            </div>
        </div>
      ))}
    </div>
  );
}
