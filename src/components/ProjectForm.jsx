import { useState } from "react";

export default function ProjectForm({ onAdd }) {

  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Prevent empty submissions
    if (!title || !description) return;

    // Send new project to parent component
    onAdd({
      id: Date.now(),
      title,
      description,
    });

    // Clear form after submission
    setTitle("");
    setDescription("");
  }

  return (
    // Form container with styling
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 rounded-xl shadow space-y-3"
    >

      {/* Section title */}
      <h2 className="text-lg font-semibold text-blue-600">
        Add Project
      </h2>

      {/* Title input */}
      <input
        className="w-full p-4 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description input */}
      <textarea
        className="w-full p-4 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Submit button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Project
      </button>

    </form>
  );
}