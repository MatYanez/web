import projects from "@/data/projects.json";
import IOSContainer from "../components/IOSContainer";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
  title: "Proyectos · iOS Platform"
};

export default function ProjectsPage() {
  return (
    <IOSContainer>
      <section className="mb-5">
        <h1 className="ios-title">Proyectos</h1>
        <p className="ios-subtitle">
          Explora todos los proyectos documentados dentro de la plataforma.
        </p>
      </section>

      <section className="row g-4">
        {projects.map((project) => (
          <div className="col-md-4" key={project.slug}>
            <ProjectCard project={project} />
          </div>
        ))}
      </section>
    </IOSContainer>
  );
}
