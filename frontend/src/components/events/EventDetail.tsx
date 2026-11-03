import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  const tarih = formatDate(event.date);

  return (
    <>
      <div className="detail-container">
        <figure className="poster-container">
          <div className="poster-box">
            <div className="poster-baslik">{event.title}</div>
            <div className="poster-alt">{tarih} · {event.location}</div>
          </div>
          <figcaption>Şekil 1: {event.title} afişi</figcaption>
        </figure>

        <dl className="info-list">
          <dt>Tarih</dt>
          <dd>{tarih}, {event.time}</dd>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </dl>
      </div>

      <h3 className="aciklama-baslik">Açıklama</h3>
      <p className="detail-desc">{event.description}</p>

      <div className="detail-actions">
        <Link to="/events" className="btn btn-secondary">← Listeye dön</Link>
        <Link to={`/admin/${event.id}/edit`} className="btn btn-primary">Güncelle</Link>
      </div>
    </>
  );
}

export default EventDetail;
