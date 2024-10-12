import React from 'react';
import Link from 'next/link';
import styles from './Ssg.module.css';
import { FaStar } from 'react-icons/fa'; // Importando ícone de estrela

export async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts;
}

const Ssg = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog com SSG</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/ssg/${post.id}`} className={styles.postLink}>
              <FaStar className={styles.icon} /> {/* Adicionando ícone */}
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ssg;
