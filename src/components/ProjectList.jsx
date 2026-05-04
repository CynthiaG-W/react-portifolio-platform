import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onDelete }) {

  return (
    <div className="flex flex-col gap-4">

      {/* Loop through projects */}
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}