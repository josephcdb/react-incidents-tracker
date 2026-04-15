import { useParams } from "react-router-dom";

export function IncidentDetailPage() {
  // Extract the incident ID from the URL parameters
  const { id } = useParams();

  return (
    <div className="container">
      <h1 className="container-title">Incident Detail</h1>

      <div className="container-wrapper">
        <div className="container-subtitle">Incident ID: {id}</div>
      </div>
    </div>
  );
}