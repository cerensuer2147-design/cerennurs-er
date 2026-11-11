# Kampüs Etkinlikleri — Backend (Express REST API)

**Öğrenci:** Ceren Nur Süer — `2416501041`

## Kurulum ve Çalıştırma

```bash
cd backend
npm install
npm run dev
```

Üretim modunda çalıştırmak için:

```bash
npm start
```

## Ortam Değişkenleri (`.env`)

`.env.example` dosyasını `.env` olarak kopyalayın:

```env
PORT=3000
```

- `PORT`: Sunucunun dinleyeceği port numarası (varsayılan: `3000`).

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | Sprint 7 |
| `GET` | `/events` | Etkinlik listesini getir (`?category=` destekler) | `200` | — | Sprint 7 |
| `GET` | `/events/:id` | Tek etkinlik getir | `200` | `404` | Sprint 7 |
| `POST` | `/events` | Yeni etkinlik oluştur | `201` | `400` | Sprint 7 |
| `PATCH` | `/events/:id` | Etkinlik güncelle | `200` | `400`, `404` | Sprint 9 |
| `DELETE` | `/events/:id` | Etkinlik sil | `204` | `404` | Sprint 9 |

### Hata Yanıt Biçimi

Tüm hatalar standart JSON yapısında döner:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```
