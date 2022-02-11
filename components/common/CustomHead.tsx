import Head from "next/head";
import React from "react";

interface Props {
  title: string;
}

const CustomHead: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};
export default CustomHead;
