import React from 'react';
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer d085d1e4a365d512fbf70ded10f18835e3d8820da5a849acf93e56f70d4c6eebc7cef391f5ab81ce0cc90e2ac03e14fecd7ea298a4e104a7c084ed55e511f35ab8bcfb224edb614f3310b7c6532d44d27bbaefc8d963770fbc03e3e8b57afc7d0366076ca82e5995e73bd1ebb41dcea05862fa56663bdfaec21f47932bc5ed31';

const SsrBlogPost = async ({ params }) => {
  const { id } = params;

  // Fetch do post na API do JSONPlaceholder
  async function getPosts() {

    const { data } = await axios.get(`http://localhost:1337/api/posts/${id}`)
    return data.data;
  }

  const post = await getPosts();

  return (
    <div>
      <h1>Post com SSR</h1>
      <h2>{post.titulo}</h2>
      <p>{post.texto}</p>
    </div>
  );
};

export default SsrBlogPost;