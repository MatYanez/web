import IOSContainer from "@/app/components/IOSContainer";
import projects from "@/data/projects.json";

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: project ? `${project.title} · Documentación` : "Proyecto",
    description: project
      ? `Documentación interna del proyecto ${project.title}.`
      : "Documentación de proyecto."
  };
}

export default function ProjectLayout({ children }) {
  return <IOSContainer>{children}</IOSContainer>;
}
