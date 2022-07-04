import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Editor from './components/Editor';

function App() {

  const [openedEditor, setOpenedEditor] = useState('html');

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(``);


  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);

    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <React.Fragment>
<div className="App">
      <h1>Welcome to the Front-end Debugger</h1>
      <h3>This is a tiny sandbox where you can edit code and debug.</h3>
      <p>Select the language:</p>
      <div className="tab-button-container">
        <Button title="HTML" onClick={() => {
          onTabClick('html')
        }} />
        <Button title="CSS" onClick={() => {
          onTabClick('css')
        }} />
        <Button title="JavaScript" onClick={() => {
          onTabClick('js')
        }} />
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              setEditorState={setCss}
            />
          ) : (
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              setEditorState={setJs}
            />
          )
        }
      </div>
      <div>
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="1"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <p id='credit'>Developed by Fazza Lootah, Advait Biju, Vedh Prasob</p>
    <p id='credit'>Designed by FazzaLootah, Advait Biju, Vedh Prasob</p>
    <p id='credit'>Deployed by Fazza Lootah</p>


    </React.Fragment>
    
  );
}

export default App;
