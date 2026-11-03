import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart">
      <div>
        <span className="kategori-badge">{event.category}</span>
        <h3>{event.title}</h3>
        <p><strong>Tarih:</strong> {formatDate(event.date)}, {event.time}</p>
        <p><strong>Yer:</strong> {event.location}</p>
        <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>
        <p>{event.description}</p>
      </div>
      <div>
        <Link to={`/events/${event.id}`} className="card-link">Detayları gör →</Link>
      </div>
    </article>
  );
}

export default EventCard;
