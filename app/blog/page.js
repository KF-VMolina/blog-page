"use client";

import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import Footer from "@/components/footer";

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

const allNews = () => {
  //Fetch blog data from contentful

  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  async function fetchEntries() {
    const client = contentful.createClient({
      space: space_id,
      accessToken: access_token,
      environment: environment,
    });

    try {
      const response = await client.getEntries({ content_type: "blogPage" });
      setIsLoading(false);
      return response.items;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  useEffect(() => {
    fetchEntries().then((items) => setBlogs(items));
  }, []);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div
          className="container"
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="hero-content text-center text-neutral-content center-container">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">All News</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="container">
            <span className="loading loading-ring loading-lg"></span>
          </div>
        ) : null}

        <div className="news-card-container">
          {blogs.map((post) => (
            <div key={post.sys.id} className="card w-96 glass">
              <figure>
                <img
                  src={post.fields.image.fields.file.url}
                  alt={post.fields.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.fields.title}</h2>
                <p>{post.fields.lightDescription}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = `/blog/${post.sys.id}`;
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default allNews;
