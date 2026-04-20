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
        <h2 className="ticket-not-found">Ticket not found</h2>
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
      <div>
        <h2 className="ticket-title">{ticket.title}</h2>
        <ul>
          <li>ID: {ticket.id}</li>
          <li>Status: {ticket.status}</li>
        </ul>        
      </div>

      {/* Tabs */}
      <div className="ticket-tab">
        <NavLink end to="" className="ticket-tab">Overview</NavLink>
        <NavLink to="activity" className="ticket-tab">Activity</NavLink>
      </div>

      {/* Content */}
      <div className="ticket-activity">
        <Outlet context={{ ticket }} />
      </div>

      {/* Back button at bottom */}
      <div className="ticket-activity">
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