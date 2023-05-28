import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import {TikTokIcon} from './Tiktok';

export default function Navbar() {
  return (
    <header className="bg-transparent md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl nav-darius">
            Darius Dinkins
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-gray-700 nav-sec">
            ABOUT
          </a>
          <a href="#shows" className="mr-5 hover:text-gray-700 nav-sec">
            SHOWS
          </a>
          <a href="#press" className="mr-5 hover:text-gray-700 nav-sec">
            PRESS
          </a>
          <a href="https://www.youtube.com/@theotherotherdarius" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-700 nav-sec">
            <AiOutlineYoutube/>
          </a>
          <a href="https://www.instagram.com/theotherotherdarius/" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-700 nav-sec">
            <AiOutlineInstagram/>
          </a>
          <a href="https://www.tiktok.com/@theotherotherdarius" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-700">
            <TikTokIcon/>
          </a>  
        </nav>
        <a
          href="#contact"
          className="book-me inline-flex items-center bg-blue-900 border-0 py-1 px-3 focus:outline-none text-white hover:bg-blue-700 rounded text-base mt-4 md:mt-0"
        >
          BOOK ME?
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
