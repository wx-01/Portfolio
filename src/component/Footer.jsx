import { ArrowUp, Copyright } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="py-7 px-4  relative flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
       
        © {new Date().getFullYear()} WajidAli. All rights reserved
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors"
      >
        <ArrowUp />
      </a>
    </div>
  );
};

export default Footer;
