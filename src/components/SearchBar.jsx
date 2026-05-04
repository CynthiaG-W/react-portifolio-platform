export default function SearchBar({ search, setSearch }) {

  return (
    // Search input field
    <input
      className="w-full p-2 border rounded shadow-sm"
      placeholder="Search projects..."
      value={search}
      onChange={(e) => setSearch(e.target.value)} // update search state
    />
  );
}