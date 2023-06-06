import React from "react";
import { shows } from "../../data"; // Assuming the data.js file is in the same folder as ShowPage.js

export default function ShowPage() {
  return (
    <div>
      <h1>SHOWS</h1>
      {shows.map((show) => (
        <div key={show.day} className="show-item">
          <div className="show-date">
            <span className="show-day">{show.day}</span>
            <span className="show-month">{show.month}</span>
          </div>
          <div className="show-location">{show.location}</div>
          <div className="show-time">{show.time}</div>
        </div>
      ))}
    </div>
  );
}
