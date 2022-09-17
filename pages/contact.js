import React from "react";
import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Los Pollos</title>
        <link rel="icon" href="/images/icon.png" />
        <meta
          name="description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          name="keywords"
          content="Los Pollos, los pollos, los pollos myanmar, los pollos vercel"
        />
        <meta property="og:title" content="Contact | Los Pollos" />
        <meta
          property="og:description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          property="og:image"
          content="https://los-pollos.vercel.app/images/icon.png"
        />
        <meta property="og:type" content="food delivery" />
        <meta property="twitter:title" content="Contact | Los Pollos" />
        <meta
          property="twitter:description"
          content="Los Pollos landed in Myanmar in 1977, when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          property="twitter:image"
          content="https://los-pollos.vercel.app/images/icon.png"
        />
        <meta name="twitter:card" content="summary" />
      </Head>

      <ContactContent />
    </div>
  );
}

export default Contact;
