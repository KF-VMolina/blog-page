import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

const AboutUs = () => {
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
            height: "100vh",
          }}
        >
          <div className="hero-content text-center text-neutral-content center-container">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AboutUs;
