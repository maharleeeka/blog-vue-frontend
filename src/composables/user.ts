import axios from "axios";
import { ref } from "vue";
import API_URL from "../constants/apiUrl";
export default function useNotes() {
  const notes = ref([]);
  const note = ref({});

  const getNotes = async () => {
    const response = await axios.get(`${API_URL}register`);
    notes.value = response.data.data;
  };

  const addNote = async (data) => {
    await axios.post("api/notes", data);
  };

  const destroyNote = async (id) => {
    await axios.delete(`/api/notes/${id}`);
  };

  const editNote = async (id) => {
    await axios.put(`/api/notes/${id}`, {
      title: note.value.title,
      description: note.value.description,
    });
  };

  const getNote = async (id) => {
    const response = await axios.get(`/api/notes/${id}`);
    note.value = response.data.data;
  };

  return {
    notes,
    note,
    getNotes,
    addNote,
    destroyNote,
    editNote,
    getNote,
  };
}
