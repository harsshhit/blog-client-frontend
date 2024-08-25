import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios"; 

const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/posts/${id}`) 
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch post details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
      <h1 className="text-3xl font-bold mb-4 text-purple-600">{post.title}</h1>
      <p className="text-gray-700 mb-6">{post.content}</p>
      <a href="/" className="text-purple-500 hover:underline">
        Back to Home
      </a>
    </div>
  );
};

export default PostDetail;
