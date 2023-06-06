import React from "react";

export default function Shows({ onShowPageClick }) {
  const handleClick = () => {
    onShowPageClick();
  };
    return (
      <section id="shows">
      <div
        className="shows w-full h-screen items-center"
        style={{ backgroundImage: "url(./basquiat.jpg)" }}
      >
        <div className=" about-words md:text-left items-center text-center">
          <button className="show-text text-white" onClick={handleClick}>SHOWS:</button>
        </div>
      </div>
    </section>
    );
}