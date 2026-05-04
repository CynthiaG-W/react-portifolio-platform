import { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {

  // State: stores all project objects
  const [projects, setProjects] = useState([
    {
       id: 1,
       title: "Habit Tracker",
       description: "Track daily habits with a simple checklist",
    },
    {
      id: 2,
      title: "Focus Timer",
      description: "Set study/workout sessions with a countdown timer",
    },
    {
       id: 3,
       title: "Chat Application",
       description: "Real-time messaging app using WebSockets",
    },
  ]);

  // State: stores search input value
  const [search, setSearch] = useState("");

  // Add a new project to state
  function addProject(project) {
    setProjects([...projects, project]);
  }

  // Delete project using its ID
  function deleteProject(id) {
    setProjects(projects.filter((p) => p.id !== id));
  }

  // Filter projects based on search input
  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navigation bar */}
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-6">

        {/* Page header section */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            Personal Project Showcase App
          </h1>

          <p className="text-gray-600">
            Add, search and manage your projects.
          </p>
        </div>

        {/* Form component for adding projects */}
        <ProjectForm onAdd={addProject} />

        {/* Search input component */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Project list display */}
        <ProjectList
          projects={filteredProjects}
          onDelete={deleteProject}
        />

      </div>
    </div>
  );
}

export default App;