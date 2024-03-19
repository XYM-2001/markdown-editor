// RawInputArea.jsx
import React, { useContext, useState } from 'react';
import { MarkdownContext } from '../context/MarkdownContext';
<<<<<<< HEAD
import MarkdownSanitized from './MarkdownSanitized';
import './styles.css'; // Import CSS file

const RawInputArea = () => {
  const { getMarkDownAsHTMLOutput } = useContext(MarkdownContext);
=======
import MarkdownSanitized from './MarkdownSanitized'; // Import MarkdownSanitized component

const RawInputArea = () => {
  const { rawText, getMarkDownAsHTMLOutput } = useContext(MarkdownContext);
>>>>>>> cf259e0313a8fce5444c528644975ef1236c61af
  const [htmlOutput, setHtmlOutput] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleConvertToHTML = () => {
    const convertedHTML = getMarkDownAsHTMLOutput(textValue);
    setHtmlOutput(convertedHTML);
  };

  const handleChangeTextarea = (event) => {
    setTextValue(event.target.value);
  };

  return (
<<<<<<< HEAD
    <div className="container">
      <h2 className="title">Raw Input Area</h2>
      <div className="textarea-container">
        <textarea
          value={textValue}
          onChange={handleChangeTextarea}
          placeholder="Enter Markdown text here..."
        />
      </div>
      <div className="button-container">
        <button onClick={handleConvertToHTML}>Convert to HTML</button>
      </div>
      <div className="output-container">
        <MarkdownSanitized htmlOutput={htmlOutput} />
      </div>
=======
    <div>
      <h2>Raw Input Area</h2>
      <textarea
        value={textValue}
        onChange={handleChangeTextarea}
        rows={10}
        cols={50}
        placeholder="Enter Markdown text here..."
      />
      <button onClick={handleConvertToHTML}>Convert to HTML</button>
      <MarkdownSanitized htmlOutput={htmlOutput} /> {/* Render MarkdownSanitized component */}
>>>>>>> cf259e0313a8fce5444c528644975ef1236c61af
    </div>
  );
};

export default RawInputArea;
