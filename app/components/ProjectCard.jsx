import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="text-decoration-none">
      <article className="ios-card ios-card-project">
        <span className="ios-tag">{project.category}</span>
        <h3 className="ios-card-title mt-3">{project.title}</h3>
        <p className="ios-card-text mt-2">{project.description}</p>
        <span className="ios-card-link mt-3">Ver documentación →</span>
      </article>
    </Link>
  );
}
