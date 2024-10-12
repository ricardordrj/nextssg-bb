import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>

      <div>
        <h1>Blog Test - SSG & SSR</h1>
        <p>Este é um teste para comparar as funcionalidades de SSG e SSR no Next.js.</p>
        <ul>
          <li>
            <Link href="/ssg">
              Visitar Blog com SSG
            </Link>
          </li>
          <li>
            <Link href="/ssr-blog">
              Visitar Blog com SSR
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
