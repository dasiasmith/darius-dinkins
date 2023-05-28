import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Shows() {
    return (
      <section id="shows">
      <div
        className="shows w-full h-screen items-center"
        style={{ backgroundImage: "url(./basquiat.jpg)" }}
      >
        <div className=" about-words md:text-left items-center text-center">
          <h1 className="show-text text-white">
            SHOWS:
          </h1>
        </div>
      </div>
    </section>
    );
}