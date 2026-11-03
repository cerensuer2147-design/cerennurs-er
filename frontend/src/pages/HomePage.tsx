import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";

function HomePage() {
  const { events } = useEvents();
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date)).slice(0, 2);

  return (
    <>
      <h2 className="sayfa-baslik">Yaklaşan 2 Etkinlik</h2>
      <EventList events={upcoming} twoColumns />
      <Link to="/events" className="btn btn-primary">Tüm etkinlikleri gör →</Link>
    </>
  );
}

export default HomePage;
