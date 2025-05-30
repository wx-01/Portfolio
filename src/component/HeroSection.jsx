import {  ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> Hi i'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              Wajid
            </span>
            <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-3">
              Ali
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Code-crafter. Problem-solver. <br></br>Full-stack developer in the making.
            Currently mastering React, Node.js & MongoDB.
          </p>
          <div className="opacity-0 pt-4 animate-fade-in-delay-5">
            <a href="#project" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-11 md:bottom-8 lefty1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
      <ArrowDown className="h-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
