const NotesTable = ({ notes, onEdit, onDelete }) => (
  <main className="panel table-panel">
    <div className="table-head">
      <h2>Daftar Catatan</h2>
      <span className="empty-hint">Klik Edit untuk memperbarui catatan</span>
    </div>
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Isi</th>
            <th>Tanggal Dibuat</th>
            <th colSpan="2">Opsi</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={note.id}>
              <td>{index + 1}</td>
              <td>{note.judul}</td>
              <td className="isi">{note.isi}</td>
              <td>{new Date(note.tanggal_dibuat).toLocaleString('id-ID')}</td>
              <td>
                <button className="btn-edit" onClick={() => onEdit(note)}>
                  Edit
                </button>
              </td>
              <td>
                <button className="btn-hapus" onClick={() => onDelete(note.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
);

export default NotesTable;
