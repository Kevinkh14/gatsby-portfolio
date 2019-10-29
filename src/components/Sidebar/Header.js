import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img  height="128px" src='https://res.cloudinary.com/kevin14/image/upload/v1571962422/iangmjh94gygnyf3jbtk.jpg' alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
