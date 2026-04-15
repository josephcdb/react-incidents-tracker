import { Link, useSearchParams } from "react-router-dom";

const INCIDENTS = [
  { id: 1, title: "Server Outage", status: "open", priority: "high" },
  { id: 2, title: "Login Issues", status: "investigating", priority: "medium" },
  { id: 3, title: "UI Bug", status: "resolved", priority: "low" },
];

const STATUS_OPTIONS = ["all", "open", "investigating", "resolved"];
const PRIORITY_OPTIONS = ["low", "medium", "high"];

function normalizeParam(value, allowed, fallback) {
  if (!value) return fallback;
  return allowed.includes(value) ? value : fallback;
}

export function IncidentsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = normalizeParam(searchParams.get("status"), STATUS_OPTIONS, "all");
  const priority = normalizeParam(searchParams.get("priority"), PRIORITY_OPTIONS, "all");
  const q = (searchParams.get("q") ?? "").trim();

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);

    // Remove the parameter if the value is empty, null, or "all"
    const shouldRemove = value === "" || value == null || value === "all";
      if (shouldRemove) {
        next.delete(key);
      } else {
        next.set(key, value);
      }

      // If q is cleared, delete it instead of leaving q= in the URL
      if (key === "q" && value.trim() === "") {
        next.delete(key);
      }

      setSearchParams(next);
  }

  const filtered = INCIDENTS.filter((incident) => {
  const matchesStatus = status === "all" || incident.status === status;
  const matchesPriority = priority === "all" || incident.priority === priority;
  const matchesQuery =
    q === "" ||
      incident.title.toLowerCase().includes(q.toLowerCase()) ||
      String(incident.id).includes(q);

      return matchesStatus && matchesPriority && matchesQuery;
  });

  return (
    <div className="container">
      <h1 className="container-title">Incidents</h1>
      <p className="container-description">
        Filters on this page are URL-driven using search params.
      </p>

      <section className="container-section">
        <label>
          <span>Status</span>
          <select 
            value={status} 
            onChange={(e) => updateParam("status", e.target.value)}>
            {STATUS_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Priority</span>
          <select
            value={priority}
            onChange={(e) => updateParam("priority", e.target.value)}
          >
            {PRIORITY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Search</span>
          <input 
            type="text"
            placeholder="Search by title or ID"
            value={q}
            onChange={(e) => updateParam("q", e.target.value)}
          />
        </label>

        <button onClick={() => setSearchParams({})}>Clear All Filters</button>
        <button onClick={() => setSearchParams({ status: "open", priority: "high" })}>Set Open & High Priority</button>
      </section>

      <div className="container">
        {filtered.length === 0 ? (
          <div className="container-description">
            No incidents match the current filters.
          </div>
        ) : (
          filtered.map((incident) => (
            <div key={incident.id} className="container-wrapper">
              <div className="container-subtitle">
                ID: {incident.id} - {incident.title}
              </div>
              <div className="container-status">
                Status: {incident.status} | Priority: {incident.priority}
              </div>
              <div className="container-subtitle">
                  Route param:id = <code>{incident.id}</code>
              </div>
              <div className="container-link">
                <Link to={`/incidents/${incident.id}`}>Open</Link>
              </div>
            </div>
          ))
      )}
      </div>
    </div>
  );
}