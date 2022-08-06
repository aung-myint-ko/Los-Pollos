import React from "react";
import Head from "next/head";
import ContactContent from "../components/Contact/ContactContent";

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Los Pollos</title>
        <meta
          name="description"
          content="Los Pollos landed in Myanmar in 1977,  when the first restaurant opened its doors at Bogyoke Road"
        />
        <meta
          name="keywords"
          content="Los Pollos, los pollos, los pollos myanmar"
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <ContactContent />
    </div>
  );
}

export default Contact;
