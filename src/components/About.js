import React from "react";

export default function About() {
  return (
    <section id="about">
      <div
        className="darius-about w-full h-screen items-center"
        style={{ backgroundImage: "url(./horizontalMic.jpg)" }}
      >
        <div className=" about-words lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            DENVER COMEDIAN.
          </h1>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
            >
              BOOK ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
