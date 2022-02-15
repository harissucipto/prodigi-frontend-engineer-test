import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/asuransi/jiwa");
  }, [router]);

  return (
    <div>
      <Head>
        <title>Prodigi Frontend Engineer Test</title>
      </Head>
      <div>
        <p className="font-bold text-center animate-bounce p-20">
          Redirecting to Route App...
        </p>
      </div>
    </div>
  );
};

export default Home;
