import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/posts`)
      .then((response) => setPosts(response.data.data))
      .catch((error) => console.error("Errore:", error));
  }, []);

  return (
    <div className="container">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <Link className="readMore" to={`/post/${post.slug}`}>
              Leggi di più
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
