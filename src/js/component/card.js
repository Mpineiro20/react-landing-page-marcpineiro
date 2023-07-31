import React from "react";

export default function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">The Best Spots around the world. </h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a href="#" class="btn btn-primary">Book a Ticket Now</a>
      </div>
    </div>

  );
}