export default function SearchBar({ search, setSearch }) {

  return (
    // Search input field
    <input
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      placeholder="Search projects..."
      value={search}
      onChange={(e) => setSearch(e.target.value)} // update search state
    />
  );
}