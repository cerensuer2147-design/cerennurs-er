# Kampüs Etkinlikleri — Backend (Express + MongoDB + Mongoose)

**Öğrenci:** Ceren Nur Süer — `2416501041`

## Kurulum ve Çalıştırma

```bash
cd backend
npm install
npm run seed
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
MONGODB_URI=mongodb://127.0.0.1:27017/kampus
```

- `PORT`: Sunucunun dinleyeceği port numarası (varsayılan: `3000`).
- `MONGODB_URI`: MongoDB veritabanı bağlantı adresi (`kampus` veritabanı).

## REST API Sözleşmesi

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | çalışıyor |
| `GET` | `/events ?search= & ?category=` | Etkinlik listesini getir (arama ve kategori filtreli, `date` sıralı) | `200` | — | çalışıyor |
| `GET` | `/events/upcoming` | Bugün ve sonraki yaklaşan etkinlikleri getir (`date`, `time` sıralı) | `200` | — | çalışıyor |
| `GET` | `/events/:id` | Tek etkinlik getir (`_id` ile) | `200` | `404` | çalışıyor |
| `POST` | `/events` | Yeni etkinlik oluştur (Schema doğrulamalı, tarih `"GG-AA-YYYY"`) | `201` | `400` | çalışıyor |
| `PATCH` | `/events/:id` | Etkinliği kısmi güncelle (`returnDocument: "after"`, `runValidators: true`) | `200` | `400`, `404` | çalışıyor |
| `DELETE` | `/events/:id` | Etkinlik sil (gövde yok) | `204` | `404` | çalışıyor |

### Hata Yanıt Biçimi

Tüm hatalar standart JSON yapısında döner:

```json
{
  "error": {
    "message": "Event not found"
  }
}
```
