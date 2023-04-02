import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

//* https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}


//* 1.https://nextjs.org/learn/basics/dynamic-routes/
//* the getAllPostIds return value have to be array of objects
//* see this link
//* 2.https://nextjs.org/learn/basics/dynamic-routes/implement-getstaticpaths
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    //* https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details 
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}