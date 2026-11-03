import type { CampusEvent } from "../../types/campus-event";
import EventCard from "./EventCard";

interface EventListProps {
  events: CampusEvent[];
  emptyText?: string;
  twoColumns?: boolean;
}

function EventList({ events, emptyText = "Etkinlik bulunamadı.", twoColumns = false }: EventListProps) {
  if (events.length === 0) {
    return <p className="sonuc">{emptyText}</p>;
  }

  return (
    <section className={twoColumns ? "etkinlik-listesi iki-kolon" : "etkinlik-listesi"}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventList;
