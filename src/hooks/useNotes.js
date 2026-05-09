import { useCallback, useEffect, useState } from 'react';
import { createNote, deleteNote, getNotes, updateNote } from '../services/noteApi';

const initialFormData = { id: '', judul: '', isi: '' };

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');

  const fetchNotes = useCallback(async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      setStatus('Gagal mengambil data catatan');
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
  }, []);

  const updateFormField = useCallback((name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const startEdit = useCallback((note) => {
    setFormData({ id: note.id, judul: note.judul, isi: note.isi });
    setStatus('Mode edit aktif');
  }, []);

  const cancelEdit = useCallback(() => {
    resetForm();
    setStatus('Edit dibatalkan');
  }, [resetForm]);

  const submitForm = useCallback(
    async (event) => {
      event.preventDefault();
      if (!formData.judul || !formData.isi) return;

      try {
        if (!formData.id) {
          await createNote({ judul: formData.judul, isi: formData.isi });
          setStatus('Catatan berhasil ditambahkan');
        } else {
          await updateNote(formData.id, { judul: formData.judul, isi: formData.isi });
          setStatus('Catatan berhasil diperbarui');
        }
        resetForm();
        fetchNotes();
      } catch (error) {
        setStatus('Terjadi kesalahan saat menyimpan data');
      }
    },
    [fetchNotes, formData.id, formData.isi, formData.judul, resetForm]
  );

  const removeNote = useCallback(
    async (id) => {
      try {
        await deleteNote(id);
        setStatus('Catatan berhasil dihapus');
        fetchNotes();
      } catch (error) {
        setStatus('Gagal menghapus catatan');
      }
    },
    [fetchNotes]
  );

  return {
    notes,
    status,
    formData,
    updateFormField,
    submitForm,
    removeNote,
    startEdit,
    cancelEdit,
  };
};

export default useNotes;
