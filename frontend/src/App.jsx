import './App.css';
import NoteForm from './components/NoteForm';
import NotesTable from './components/NotesTable';
import useNotes from './hooks/useNotes';

function App() {
  const {
    notes,
    status,
    formData,
    updateFormField,
    submitForm,
    removeNote,
    startEdit,
    cancelEdit,
  } = useNotes();

  const handleFieldChange = (event) => {
    updateFormField(event.target.name, event.target.value);
  };

  return (
    <div className="page">
      <header className="hero">
        <div>
          <h1>Notebook Harian</h1>
          <p>Simpan ide, tugas, dan catatan pentingmu dalam satu tempat.</p>
        </div>
      </header>
      <NoteForm
        formData={formData}
        onChange={handleFieldChange}
        onSubmit={submitForm}
        onCancel={cancelEdit}
      />

      <p id="status">{status}</p>

      <NotesTable notes={notes} onEdit={startEdit} onDelete={removeNote} />
    </div>
  );
}

export default App;