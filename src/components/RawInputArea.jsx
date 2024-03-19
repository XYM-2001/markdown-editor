// RawInputArea.jsx
import React, { useContext, useState } from 'react';
import { MarkdownContext } from '../context/MarkdownContext';
import MarkdownSanitized from './MarkdownSanitized';
import './styles.css'; // Import CSS file

const RawInputArea = () => {
  const { getMarkDownAsHTMLOutput } = useContext(MarkdownContext);
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
    </div>
  );
};

export default RawInputArea;
