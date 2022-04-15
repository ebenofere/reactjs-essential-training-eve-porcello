import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

/* ----------- Installing React Router 6 ----------- */
// npm install react-router@next react-router-dom@next
/* --------------------------------------------------*/

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="events">Events</Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
    </div>
  );
}

export function CompanyHistory() {
  return (
    <div>
      <h2>Our Company History</h2>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our Location</h2>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location, "location");
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}
