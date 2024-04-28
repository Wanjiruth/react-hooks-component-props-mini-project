// Article.js
import React from "react";

function Article({ article }) {
  const { title, date, preview, minutes } = article;

  return (
    <article>
      <h2>{title}</h2>
      <small>{date ? date : "Date not available"}</small>
      <p>{preview}</p>
      <p>{minutes} min read</p>
    </article>
  );
}

export default Article;
