import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { EventFormData } from "../../types/campus-event";
import { validateEvent } from "../../utils/validate-event";
import type { EventFormErrors } from "../../utils/validate-event";
import { useEvents } from "../../context/EventsContext";

interface EventFormProps {
  initialData: EventFormData;
  submitText: string;
  onSubmit: (data: EventFormData) => void;
}

const BASLANGIC_KATEGORILERI = ["Seminer", "Atölye", "Söyleşi"];
const YENI = "__yeni__";

function EventForm({ initialData, submitText, onSubmit }: EventFormProps) {
  const { events } = useEvents();
  const categories = [...new Set([...BASLANGIC_KATEGORILERI, ...events.map((e) => e.category)])];

  const [data, setData] = useState<EventFormData>(initialData);
  const [newCategory, setNewCategory] = useState("");
  const [errors, setErrors] = useState<EventFormErrors>({});

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const yeniSecili = data.category === YENI;
    const finalData: EventFormData = yeniSecili ? { ...data, category: newCategory.trim() } : data;

    const found = validateEvent(finalData);
    if (yeniSecili && newCategory.trim().length < 3) {
      found.category = "Yeni kategori en az 3 karakter olmalı.";
    }

    setErrors(found);
    if (Object.keys(found).length === 0) {
      onSubmit(finalData);
    }
  }

  return (
    <form className="form" noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Etkinlik Adı *</label>
        <input id="title" name="title" value={data.title} onChange={handleChange}
          aria-invalid={errors.title ? true : undefined} />
        <span className="hata-metni">{errors.title}</span>
      </div>

      <div className="form-group">
        <label htmlFor="category">Kategori *</label>
        <select id="category" name="category" value={data.category} onChange={handleChange}
          aria-invalid={errors.category ? true : undefined}>
          <option value="">Seçiniz</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
          <option value={YENI}>+ Yeni kategori ekle…</option>
        </select>
        <span className="hata-metni">{errors.category}</span>
      </div>

      {data.category === YENI && (
        <div className="form-group">
          <label htmlFor="newCategory">Yeni Kategori Adı *</label>
          <input id="newCategory" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Örn. Konser, Spor, Sergi" />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="date">Tarih *</label>
        <input type="date" id="date" name="date" value={data.date} onChange={handleChange}
          aria-invalid={errors.date ? true : undefined} />
        <span className="hata-metni">{errors.date}</span>
      </div>

      <div className="form-group">
        <label htmlFor="time">Saat *</label>
        <input type="time" id="time" name="time" value={data.time} onChange={handleChange}
          aria-invalid={errors.time ? true : undefined} />
        <span className="hata-metni">{errors.time}</span>
      </div>

      <div className="form-group">
        <label htmlFor="location">Yer *</label>
        <input id="location" name="location" value={data.location} onChange={handleChange}
          aria-invalid={errors.location ? true : undefined} />
        <span className="hata-metni">{errors.location}</span>
      </div>

      <div className="form-group">
        <label htmlFor="capacity">Kontenjan *</label>
        <input type="number" id="capacity" name="capacity" value={data.capacity} onChange={handleChange}
          aria-invalid={errors.capacity ? true : undefined} />
        <span className="hata-metni">{errors.capacity}</span>
      </div>

      <div className="form-group">
        <label htmlFor="description">Açıklama *</label>
        <textarea id="description" name="description" rows={4} value={data.description}
          onChange={handleChange} aria-invalid={errors.description ? true : undefined} />
        <span className="hata-metni">{errors.description}</span>
      </div>

      <button type="submit" className="btn btn-primary">{submitText}</button>
    </form>
  );
}

export default EventForm;
