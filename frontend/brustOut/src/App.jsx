import React from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
export default function HeroSection() {
  return (
      <>
      <div>
        <Header />
          <div>
          <div className="flex flex-col items-center justify-center w-full gap-10 m-10">

          <div className="h-full text-center text-4xl lg:text-6xl px-10">
              You don't have to face it alone
          </div>
              <div className="text-center">
                  Connect with empathetic mentors anonymously. Share your feelings in a safe, judgment-free space whenever you need support.
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                  <button>Start Talking Now</button>
                  <button>Learn More &rarr;</button>
              </div>
          </div>
              <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4">
                  <p className="text-5xl">How it works?</p>

              </div>
          </div>
          <Footer />
      </div>
      </>
  );
}
