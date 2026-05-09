const NoteForm = ({ formData, onChange, onSubmit, onCancel }) => (
  <section className="panel form-panel">
    <form onSubmit={onSubmit}>
      <div className="field">
        <label>Judul</label>
        <input
          type="text"
          name="judul"
          value={formData.judul}
          onChange={onChange}
          placeholder="Contoh: Algoritma Pemrograman"
          required
        />
      </div>
      <div className="field">
        <label>Isi Catatan</label>
        <textarea
          name="isi"
          value={formData.isi}
          onChange={onChange}
          placeholder="Tulis poin penting..."
          required
        ></textarea>
      </div>
      <div className="form-actions">
        <button type="submit">Simpan Catatan</button>
        <button id="btn-batal" type="button" onClick={onCancel}>
          Batal Edit
        </button>
      </div>
    </form>
  </section>
);

export default NoteForm;
