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
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | Sprint 7 |
| `GET` | `/events` | Etkinlik listesini getir (`?category=` destekler, `date` sıralı) | `200` | — | Sprint 8 |
| `GET` | `/events/:id` | Tek etkinlik getir (`_id` ile) | `200` | `404` | Sprint 8 |
| `POST` | `/events` | Yeni etkinlik oluştur (Schema doğrulamalı) | `201` | `400` | Sprint 8 |
| `PATCH` | `/events/:id` | Etkinlik güncelle | `200` | `400`, `404` | Sprint 9 |
| `DELETE` | `/events/:id` | Etkinlik sil | `204` | `404` | Sprint 9 |
