import { Link, useSearchParams } from "react-router-dom";
import { tickets } from "../data/tickets.js";

export function TicketsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");

  // The list is filtered directly from the URL, not local component state.
  const filtered =
    status === "open" || status === "closed"
      ? tickets.filter((t) => t.status === status)
      : tickets;

  function setStatus(next) {
    const nextParams = new URLSearchParams(searchParams);

    // Remove the param for "All"; otherwise set ?status=open or ?status=closed.
    if (next) nextParams.set("status", next);
    else nextParams.delete("status");

    setSearchParams(nextParams, { replace: true });
  }

  // Preserve the current filter when linking into a ticket detail page.
  const qs = searchParams.toString();
  const suffix = qs ? `?${qs}` : "";

  return (
    <section className="container">
      <h2 className="container-title">Tickets</h2>

      <div className="tickets">
        <button
          onClick={() => setStatus("open")}
          aria-pressed={status === "open"}
        >
          Open
        </button>
        <button
          onClick={() => setStatus("closed")}
          aria-pressed={status === "closed"}
        >
          Closed
        </button>
        <button onClick={() => setStatus(null)} aria-pressed={!status}>
          All
        </button>
      </div>

      <ul>
        {filtered.map((t) => (
          <li key={t.id}>
            <Link to={`/tickets/${t.id}${suffix}`}>{t.title}</Link>{" "}
            <span>({t.status})</span>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p>No tickets match this filter.</p>
      ) : null}
    </section>
  );
}