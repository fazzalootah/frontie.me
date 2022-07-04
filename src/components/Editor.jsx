import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';

import { Controlled as ControlledEditorComponent } from 'react-codemirror2';



const Editor = ({ language, value, setEditorState }) => {

  const [theme, setTheme] = useState("dracula")
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  }

  const themeArray = ['dracula', 'material', 'mdn-like', 'the-matrix', 'night']

  return (
    <div className="editor-container">
      <div style={{marginBottom: "10px"}}>
      </div>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value= {value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true, 
        }}
      />
    </div>
  )
}

export default Editor
