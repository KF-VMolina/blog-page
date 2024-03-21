"use client";

import Navbar from "@/components/navbar";
import React, { useState, useEffect } from "react";
import * as contentful from "contentful";
import Footer from "@/components/footer";

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

const Entry = ({ params }) => {
  // Fetch blog data from contentful

  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState([]);

  async function fetchEntry() {
    const client = contentful.createClient({
      space: space_id,
      accessToken: access_token,
      environment: environment,
    });

    try {
      const response = await client.getEntry(params.entryId);
      setIsLoading(false);
      return response;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    fetchEntry().then((item) => setEntry(item));
  }, []);

  useEffect(() => {
    console.log(entry);
  }, [entry]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {isLoading ? (
          <div className="container">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : (
          <div
            style={{
              padding: "20px",
            }}
          >
            <div className="news-card">
              <h1
                className="mb-5 text-5xl font-bold"
                style={{
                  textAlign: "center",
                }}
              >
                {entry.fields?.title}
              </h1>
              <h1
                className="mb-5 text-xl font-bold"
                style={{
                  textAlign: "center",
                }}
              >
                {entry.fields.lightDescription}
              </h1>
              <p
                style={{
                  textAlign: "justify",
                  width: "70%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {entry.fields.body.content[0].content[0].value}
              </p>
              <img
                className="image-responsive"
                src={entry.fields.image.fields.file.url}
                alt={entry.fields.image.fields.title}
              />
            </div>
          </div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Entry;
