import React from "react";
import "./DashBoard.css";
import ChartComponent from './ChartComponent';

const DashBoard = () => {
  return (
    <div class="card-container">
      <div class="card">
        <h2>$411,402,45</h2>
        <p>Total Revenue</p>
      </div>

      <div class="card">
        <h2>Card 2</h2>
        <p>Subtitle 2</p>
      </div>

      <div class="card">
        <h2>Card 3</h2>
        <p>Subtitle 3</p>
      </div>

      <div class="card">
        <h2>Card 4</h2>
        <p>Subtitle 4</p>
      </div>

      <div class="card">
        <h2>Card 5</h2>
        <p>Subtitle 5</p>
      </div>

      <div class="card">
        <h2>Card 6</h2>
        <p>Subtitle 6</p>
      </div>

      <div class="card">
        <h2>Card 7</h2>
        <p>Subtitle 7</p>
      </div>

      <div class="card">
        <h2>Card 8</h2>
        <p>Subtitle 8</p>
      </div>
      <ChartComponent />
    </div>
  );
};

export default DashBoard;
