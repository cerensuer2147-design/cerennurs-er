import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="mesaj mesaj-hata">
      <h2 className="sayfa-baslik">Sayfa bulunamadı</h2>
      <p className="ust-bosluk">Aradığınız adres ya da etkinlik mevcut değil.</p>
      <Link to="/" className="btn btn-primary">Ana sayfaya dön</Link>
    </div>
  );
}

export default NotFoundPage;
