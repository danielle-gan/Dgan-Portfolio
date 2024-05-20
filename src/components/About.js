import React from "react";

export default function About() {
    return(
        <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Dani.
            <br className="hidden lg:inline-block" />I love to build cool
            apps that solve problems!
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm an tech enthusiast who thrives on helping people and increasing workplace efficiency. Whether it's a tricky bug or a performance hiccup, I'm always up for the challenge! When I'm not diving into code and ensuring everything's shipshape, you can find me indulging in my many hobbies – from rock climbing to playing co-op video games. Life's an adventure, and I'm here to enjoy every byte of it!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-pink-300 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./avatar.png"
          />
        </div>
      </div>
    </section>
    );

}



