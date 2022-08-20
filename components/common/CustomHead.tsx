import Head from 'next/head';

const CustomHead = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default CustomHead;
