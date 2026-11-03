import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";
import type { EventFormData } from "../types/campus-event";

const emptyForm: EventFormData = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  description: "",
  capacity: "",
};

function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="sayfa-baslik">Yeni Etkinlik</h2>
      <EventForm
        initialData={emptyForm}
        submitText="Kaydet"
        onSubmit={(data) => {
          addEvent(data);
          navigate("/admin");
        }}
      />
    </>
  );
}

export default AddEventPage;
