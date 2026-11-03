import type { CampusEvent } from "../types/campus-event";

export function findEventById(events: CampusEvent[], id: string): CampusEvent | undefined {
  return events.find((e) => e.id === id);
}

export function filterEvents(
  events: CampusEvent[],
  searchText: string,
  category: string
): CampusEvent[] {
  const aranan = searchText.trim().toLocaleLowerCase("tr-TR");
  return events.filter((e) => {
    const metin = `${e.title} ${e.location} ${e.description} ${e.category}`.toLocaleLowerCase("tr-TR");
    return metin.includes(aranan) && (category === "" || e.category === category);
  });
}
