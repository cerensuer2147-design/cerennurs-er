export interface CampusEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
}

// Form için: id yok, kontenjan metin (input her zaman metin verir)
export interface EventFormData {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
}
