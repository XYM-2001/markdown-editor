// RawInputArea.jsx
import React, { useContext, useState } from 'react';
import { MarkdownContext } from '../context/MarkdownContext';
import MarkdownSanitized from './MarkdownSanitized'; // Import MarkdownSanitized component

const RawInputArea = () => {
  const { rawText, getMarkDownAsHTMLOutput } = useContext(MarkdownContext);
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
    </div>
  );
};

export default RawInputArea;
