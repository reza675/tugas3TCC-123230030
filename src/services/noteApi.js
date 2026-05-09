import axios from 'axios';

// Sesuaikan URL ini nanti setelah Backend dideploy ke Cloud Run
const API_BASE_URL = "/api/v1/notes";

export const getNotes = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data?.data || [];
};

export const createNote = (payload) => axios.post(API_BASE_URL, payload);

export const updateNote = (id, payload) => axios.put(`${API_BASE_URL}/${id}`, payload);

export const deleteNote = (id) => axios.delete(`${API_BASE_URL}/${id}`);
