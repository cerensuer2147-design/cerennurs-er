import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  function handleDelete(id: string, title: string) {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  }

  return (
    <>
      <h2 className="sayfa-baslik">Etkinlik Yönetimi</h2>
      <p className="ust-bosluk">
        <Link to="/admin/new" className="btn btn-primary">+ Yeni etkinlik</Link>
      </p>

      {events.length === 0 ? (
        <p className="sonuc">Henüz etkinlik yok.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Etkinlik</th>
              <th>Tarih</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e) => (
              <tr key={e.id}>
                <td data-label="Etkinlik">{e.title}</td>
                <td data-label="Tarih">{formatDate(e.date)}</td>
                <td data-label="Kategori">{e.category}</td>
                <td data-label="İşlemler" className="islemler">
                  <Link to={`/admin/${e.id}/edit`} className="btn btn-primary btn-kucuk">Düzenle</Link>
                  <button
                    type="button"
                    className="btn btn-sil btn-kucuk"
                    onClick={() => handleDelete(e.id, e.title)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <p className="sonuc ust-bosluk">Toplam {events.length} etkinlik</p>
    </>
  );
}

export default AdminPage;
