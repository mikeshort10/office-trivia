import React from "react";
import Head from "next/head";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Office Trivia</title>
        <meta
          name="description"
          content="An app for sharing obscure trivia questions with fellow Dunder Mifflin enthusiasts"
        />
        <link rel="stylesheet" href="/build/index.css" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="" />
        <link rel="apple-touch-icon" href="" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
