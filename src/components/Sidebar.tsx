import React  from "react"
import {noteType} from "../App"

type sideBarType = {
  notes: noteType[]
  currentNote: noteType
  setCurrentNoteId: any
  newNote: () => void
  deleteNote: (event: React.MouseEvent<HTMLButtonElement>, noteId: string) => void
}

export default function Sidebar(props: sideBarType) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div

        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
        <button
          className={"delete-btn"}
          onClick={(event) => props.deleteNote(event, note.id)}>
          <i className={"gg-trash trash-icon"}></i>
        </button>
      </div>
    </div>
  ))

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>+</button>
      </div>
      {noteElements}
    </section>
  )
}
