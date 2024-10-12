import React from 'react';
import Link from 'next/link';
import styles from './Ssg.module.css';
import { FaStar } from 'react-icons/fa'; // Importando ícone de estrela
import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer d085d1e4a365d512fbf70ded10f18835e3d8820da5a849acf93e56f70d4c6eebc7cef391f5ab81ce0cc90e2ac03e14fecd7ea298a4e104a7c084ed55e511f35ab8bcfb224edb614f3310b7c6532d44d27bbaefc8d963770fbc03e3e8b57afc7d0366076ca82e5995e73bd1ebb41dcea05862fa56663bdfaec21f47932bc5ed31';

export async function getPosts() {

  const { data } = await axios.get('http://localhost:1337/api/posts')
  return data.data;
}

const SsrBlog = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog com SSG</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/ssr-blog/${post.documentId}`} className={styles.postLink}>
              <FaStar className={styles.icon} /> {/* Adicionando ícone */}
              {post.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SsrBlog;
