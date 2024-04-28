// ArticleList.js
import React from "react";
import Article from "./Article";
import blogData from "../data/blog";
function ArticleList({ articles }) {

  const articleList = articles || [];

  return (
    <main>
      {articleList.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </main>
  );
}



export default ArticleList;
