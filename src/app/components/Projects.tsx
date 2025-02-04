import "./styles/Project.css"
import Image from "next/image";
import Link from "next/link";

const projects = [
  { 
    title: "E-Commerce Website",
    description: "I built a fully responsive and visually appealing website using Next.js and Tailwind CSS, ensuring the website adapts seamlessly across all screen sizes.",
    img: "/perfume02.jpg",
    url: "", 
  },
  {
    title: "Jewelry Website",
    description: "My Jewelry Website Using React Components and CSS. It showcases my basic understanding of components, layout, and responsive design.",
    img: "/project2.jpg",
    url: "https://aurora-luxe.vercel.app/",
  },
  { 
    title: "Perfume Website",
    description: "A Simple Perfume Website built using HTML and CSS. This project helped me practice structuring content and applying fundamental styles.",
    img: "/project3.jpg",
    url: "https://luxeessence.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <h2 className="projects-subtitle">Here are some of my recent beginner-level projects.</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Link href={project.url} target="_blank">
                <Image
                  src={project.img}
                  width={500}
                  height={300}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  <Link href={project.url} target="_blank" className="project-link">
                    View Project
                  </Link>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
