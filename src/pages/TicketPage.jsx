import {
  NavLink,
  Outlet,
  useNavigate,
  useOutletContext,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getTicketById } from "../data/tickets.js";

export function TicketPage() {
  // Read the dynamic route param from /tickets/:ticketId.
  const { ticketId } = useParams();
  const ticket = getTicketById(ticketId);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  function backToTickets() {
    const qs = searchParams.toString();
    const queryString = qs ? `?${qs}` : "";

    // Programmatic navigation preserves the current list filter when going back.
    navigate(`/tickets${queryString}`);
  }

  if (!ticket) {
    return (
      <section>
        <h2 style={{ marginTop: 0 }}>Ticket not found</h2>
        <p>
          No ticket exists for ID: <code>{ticketId}</code>
        </p>
        <button onClick={backToTickets}>Back to tickets</button>
      </section>
    );
  }

  return (
    <section>
      {/* Header */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8}}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px" }}>{ticket.title}</h2>
        <ul>
          <li>ID: {ticket.id}</li>
          <li>Status: {ticket.status}</li>
        </ul>        
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
          borderBottom: "1px solid #ddd",
          paddingBottom: 8,
        }}
      >
      <NavLink
        end
        to=""
        style={({ isActive }) => ({
          fontWeight: isActive ? 600 : 400,
          textDecoration: "none",
          padding: "6px 10px",
          borderRadius: 6,
          background: isActive ? "#eee" : "transparent",
          color: isActive ? "#000" : "#555",
        })}
      >
        Overview
      </NavLink>

      <NavLink
        to="activity"
        style={({ isActive }) => ({
          fontWeight: isActive ? 600 : 400,
          textDecoration: "none",
          padding: "6px 10px",
          borderRadius: 6,
          background: isActive ? "#eee" : "transparent",
          color: isActive ? "#000" : "#555",
        })}
      >
        Activity
      </NavLink>
    </div>

    {/* Content */}
    <div style={{ marginTop: 16 }}>
      <Outlet context={{ ticket }} />
    </div>

    {/* Back button at bottom */}
    <div style={{ marginTop: 16 }}>
      <button onClick={backToTickets}>Back to tickets</button>
    </div>
  </section>
  );
}

TicketPage.Overview = function Overview() {
  // The index route reads the shared ticket data from the parent Outlet context.
  const { ticket } = useOutletContext();

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Overview</h3>
      <p style={{ opacity: 0.8, marginBottom: 0 }}>
        This is the index route. Ticket <code>{ticket.id}</code> is{" "}
        <strong>{ticket.status}</strong>.
      </p>
    </div>
  );
};

TicketPage.Activity = function Activity() {
  // The activity child route also reuses the parent ticket via Outlet context.
  const { ticket } = useOutletContext();

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>Activity</h3>
      <ul style={{ paddingLeft: 18 }}>
        {ticket.activity.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};