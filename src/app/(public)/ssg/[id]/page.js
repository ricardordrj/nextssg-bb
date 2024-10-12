import React from 'react';

// Função para gerar os parâmetros estáticos (caminhos) para os posts
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const postIds = posts.map((post) => ({ id: post.id.toString() }))
  return postIds;
}

// Componente para exibir o post
const SsgBlogPost = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  if (!res.ok) {
    // Você pode lidar com erros de busca aqui
    return <div>Post não encontrado</div>;
  }

  const post = await res.json();

  return (
    <div>
      <h1>Post com SSG</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default SsgBlogPost;