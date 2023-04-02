import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

        {/*
        //*for seo
        //* https://nextjs.org/learn/seo/crawling-and-indexing/metatags 
        */}
        {/* <meta name="robots" content="noindex,nofollow" key="noindexnofollow" />
        <meta name="googlebot" content="noindex,nofollow" key="googlebot" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" /> 
        //* https://nextjs.org/learn/seo/crawling-and-indexing/canonical
        <link
          rel="canonical"
          href="https://example.com/blog/original-post"
          key="canonical"
        /> 
        */}

      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          hi im a web developer and a student from bangladesh. You can contact
          me on here. abrakadabra
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

//* the getStaticProps lets you prerender your page with fetched
//* data at build time in Static Site Generation
//* 1.https://nextjs.org/learn/basics/data-fetching/with-data
//* 2.https://nextjs.org/learn/basics/data-fetching/getstaticprops-details
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

//* use getServerSideProps for Server Side Rendering
//* https://nextjs.org/learn/seo/rendering-and-ranking/url-structure
//* https://nextjs.org/learn/basics/data-fetching/request-time
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
