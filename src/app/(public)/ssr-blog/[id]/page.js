import React from 'react';

const SsrBlogPost = async ({ params }) => {
  const { id } = params;

  // Fetch do post na API do JSONPlaceholder
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div>
      <h1>Post com SSR</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SsrBlogPost;