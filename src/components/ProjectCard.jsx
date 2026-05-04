export default function ProjectCard({ project, onDelete }) {

  return (
    // Individual project card
<div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border-l-4 border-cyan-500">
      {/* Project title */}
      <h2 className="text-lg font-semibold text-gray-800">
        {project.title}
      </h2>

      {/* Project description */}
      <p className="text-gray-600 text-sm mt-1">
        {project.description}
      </p>

      {/* Delete button */}
      <button
        onClick={() => onDelete(project.id)}
        className="mt-3 text-sm text-red-500 hover:text-red-800"
      >
        Delete
      </button>

    </div>
  );
}