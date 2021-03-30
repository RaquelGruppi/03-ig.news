import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title> Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>29 March 2021</time>
            <strong>What is a PWA (Progressive Web App)?</strong>
            <p>A PWA is a hybrid application between web and mobile. Imagine that when you access a website that you really like on your smartphone, you receive a warning to add the website to your application homepage.</p>
          </a>
          <a href="#">
            <time>29 March 2021</time>
            <strong>What is a PWA (Progressive Web App)?</strong>
            <p>A PWA is a hybrid application between web and mobile. Imagine that when you access a website that you really like on your smartphone, you receive a warning to add the website to your application homepage.</p>
          </a>
          <a href="#">
            <time>29 March 2021</time>
            <strong>What is a PWA (Progressive Web App)?</strong>
            <p>A PWA is a hybrid application between web and mobile. Imagine that when you access a website that you really like on your smartphone, you receive a warning to add the website to your application homepage.</p>
          </a>x
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100, 
  });

  console.log(JSON.stringify(response, null, 2));

  return { 
    props: {}
  }
}
