# Kampüs Etkinlikleri (Frontend + Backend)

**Öğrenci:** Ceren Nur Süer — `2416501041`

Canlı Vercel Adresi: https://cerennursuer-frontend.vercel.app/

## Kurulum

### Backend (`http://localhost:3000`)
```bash
cd backend
npm install
npm run dev
```

### Frontend (`http://localhost:5173`)
```bash
cd frontend
npm install
npm run dev
```

## Frontend Route Listesi (Sprint 6)

| Adres | Sayfa |
|---|---|
| / | HomePage |
| /events | EventsPage |
| /events/:id | EventDetailPage |
| /login | LoginPage |
| /register | RegisterPage |
| /forgot-password | ForgotPasswordPage |
| /admin | AdminPage |
| /admin/new | AddEventPage |
| /admin/:id/edit | EditEventPage |
| * | NotFoundPage |

## Backend REST API Sözleşmesi (Sprint 7)

| Method | Endpoint | Amaç | Başarılı | Hata | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/health` | Sunucu sağlık kontrolü | `200` | — | Sprint 7 |
| `GET` | `/events` | Etkinlik listesini getir | `200` | — | Sprint 7 |
| `GET` | `/events/:id` | Tek etkinlik getir | `200` | `404` | Sprint 7 |
| `POST` | `/events` | Yeni etkinlik oluştur | `201` | `400` | Sprint 7 |
| `PATCH` | `/events/:id` | Etkinlik güncelle | `200` | `400`, `404` | Sprint 9 |
| `DELETE` | `/events/:id` | Etkinlik sil | `204` | `404` | Sprint 9 |
