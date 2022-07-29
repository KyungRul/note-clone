import React from "react"
import ReactMde from "react-mde"
import Showdown from "showdown"
import {noteType} from "../App"
import 'react-mde/lib/styles/css/react-mde-all.css';


export default function Editor({currentNote, updateNote}:{currentNote:noteType,updateNote:(text:string)=>void}) {
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview" | undefined>("write")

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  })

  return (
    <section className="pane editor">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  )
}
