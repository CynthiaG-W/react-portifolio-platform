import { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {

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

  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([...projects, project]);
  }

  function deleteProject(id) {
    setProjects(projects.filter((p) => p.id !== id));
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto p-6 space-y-10">

        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-blue-700">
            Personal Project Showcase App
          </h1>

          <p className="text-gray-600">
            Add, search and manage your projects.
          </p>
        </div>

        {/* Form */}
        <ProjectForm onAdd={addProject} />

        {/* Search */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* List */}
        <ProjectList
          projects={filteredProjects}
          onDelete={deleteProject}
        />

      </div>
    </div>
  );
}

export default App;