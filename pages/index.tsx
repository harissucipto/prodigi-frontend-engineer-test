import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Prodigi Frontend Engineer Test</title>
      </Head>
      <div>
        <p className="font-bold">Hello World</p>
      </div>
    </div>
  );
};

export default Home;
