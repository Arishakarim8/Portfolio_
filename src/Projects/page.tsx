const projects = [
    {
      title: "E-Commerce Website",
      description: "A modern e-commerce site with payment integration.",
      img: "/project1.jpg",
      liveLink: "https://example.com/project1",
      repoLink: "https://github.com/yourname/project1",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js.",
      img: "/project2.jpg",
      liveLink: "https://example.com/project2",
      repoLink: "https://github.com/yourname/project2",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <div className="mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="bg-primary text-white px-4 py-2 rounded-lg font-semibold mr-2"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      className="text-primary underline"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
