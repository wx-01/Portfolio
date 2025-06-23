import { ArrowRight, ExternalLink, GitBranch, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Chat App",
    description:
      "A real-time chat application built with React, Node.js, and Socket.io. Supports instant messaging, user authentication and seamless communication.",
    image: "./projects/chatty1.PNG",
    tags: ["React", "node.js", "Socket.io", "MongoDB"],
    demourl: "https://chat-app-891e.onrender.com",
    githuburl: "https://github.com/wx-01/Chat-app",
  },
  {
    id: 2,
    title: "Birthday Wishing",
    description:
      "A personalized 3D animated birthday wish generator app built with React and Spline. Offers a unique way to express gratitude and celebrate special occasions.",
    image: "./projects/birthday.PNG",
    tags: ["React", "Spline", "Firebase"],
    demourl: "https://birthday-fmmf.onrender.com/",
    githuburl: "https://github.com/wx-01/Birthday",
  },
  {
    id: 3,
    title: "Movie Search App",
    description:
      "A sleek movie search interface built with React and the OMDb API. Users can search for movies. Focused on API integration, dynamic rendering, and responsive UI design.",
    image: "./projects/movies.PNG",
    tags: ["React", "Tailwind", "Axios"],
    demourl: "https://react-movies-search.onrender.com",
    githuburl: "https://github.com/wx-01/React_movies_search",
  },
  {
    id: 4,
    title: "Crud App",
    description:
      "A simple and efficient CRUD application built with React. Allows users to manage data entries dynamically with real-time updates and a clean, user-friendly interface.",
    image: "./projects/crud.PNG",
    tags: ["React", "Tailwind", "node.js", "MYsql"],
    demourl: "https://crud-g867.onrender.com/",
    githuburl: "https://github.com/wx-01/CRUD_",
  },
{
    id: 5,
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript, designed to sharpen my understanding of DOM manipulation, game logic, and responsive UI development.",
    image: "./projects/tictactoe.PNG",
    tags: ["HTML", "CSS","Javascript"],
    demourl: "https://wx-01.github.io/TicTacToe/",
    githuburl: "https://github.com/wx-01/TicTacToe",
  },
  {
    id: 6,
    title: "Blog Preveiew CARD",
    description:
      "A responsive blog article card featuring hover effects and structured typography. Built to improve layout and visual hierarchy using clean HTML and CSS.",
    image: "./projects/blog.PNG",
    tags: ["HTML", "CSS"],
    demourl: "https://wx-01.github.io/blog-prev-card-comp/",
    githuburl: "https://github.com/wx-01/blog-prev-card-comp",
  },
  {
    id: 7,
    title: "QR-code Component",
    description:
      "A centered QR code card built with mobile-first design in mind. Focused on mastering alignment, spacing, and component styling with pure CSS.",
    image: "./projects/qr.PNG",
    tags: ["HTML", "CSS"],
    demourl: "https://wx-01.github.io/qrcode-comp/",
    githuburl: "https://github.com/wx-01/qrcode-comp",
  },
  
];

const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl mb-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className=" text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-107"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/25">
                    {tag}
                  </span>
                ))}
              </div>
            <h3 className="text-xl font-semibold mb-1 ">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-5">{project.description}</p>
           <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href={project.demourl} target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <ExternalLink size={23}/>
              </a>
                 <a href={project.githuburl} target="_blank"
                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <Github size={23}/>
              </a>
            </div>

            </div>
           </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-12">
        <a className="cosmic-button w-fit  flex items-center mx-auto gap-2 animate-bounce"
        href="https://github.com/wx-01"
        target="_blank"
        >
         <Github size={24}/> Check My Github <ArrowRight />
        </a>
      </div>
    </section>
  );
};

export default ProjectSection;
