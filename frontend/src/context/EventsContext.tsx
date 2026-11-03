import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CampusEvent, EventFormData } from "../types/campus-event";
import { initialEvents } from "../data/events";

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

// Form verisini gerçek etkinliğe çevirir: id ekler, kontenjanı sayıya çevirir
function toCampusEvent(id: string, data: EventFormData): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    category: data.category,
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    description: data.description.trim(),
    capacity: Number(data.capacity),
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  // Ekle: [...dizi, yeni] → sonuna ekler
  function addEvent(data: EventFormData) {
    setEvents((prev) => [...prev, toCampusEvent(`event-${Date.now()}`, data)]);
  }

  // Güncelle: map → eşleşeni değiştirir
  function updateEvent(id: string, data: EventFormData) {
    setEvents((prev) => prev.map((e) => (e.id === id ? toCampusEvent(id, data) : e)));
  }

  // Sil: filter → eşleşmeyenleri tutar
  function deleteEvent(id: string) {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const value = useContext(EventsContext);
  if (value === null) {
    throw new Error("useEvents, EventsProvider içinde kullanılmalı.");
  }
  return value;
}
