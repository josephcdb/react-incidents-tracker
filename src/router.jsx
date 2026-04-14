import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./ui/RootLayout.jsx";
import { IncidentsPage } from "./pages/IncidentsPage.jsx";
import { IncidentDetailPage } from "./pages/IncidentDetailPage.jsx";
import { ApprovalsPage } from "./pages/ApprovalsPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { TicketsPage } from "./pages/TicketsPage.jsx";
import { TicketPage } from "./pages/TicketPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    /* Nested routes for the main content area */
    children: [
      { index: true, element: <IncidentsPage /> },
      { path: "incidents/:id", element: <IncidentDetailPage /> },
      { path: "approvals", element: <ApprovalsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "tickets", 
        children: [
          { index: true, element: <TicketsPage /> },
          { path: ":ticketId", element: <TicketPage />,
            children: [
              { index: true, element: <TicketPage.Overview /> },
              { path: "activity", element: <TicketPage.Activity /> },
            ],
          },
        ]
      },
      { path: "*", element: <NotFoundPage /> },
      {}
    ],
  },
]);