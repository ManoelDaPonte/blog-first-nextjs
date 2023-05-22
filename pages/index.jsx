import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Mano, homme en puissance à la recherche de la gloire.</p>
        <p>
          Sample website
        </p>
      </section>
    </Layout>
  );
}
