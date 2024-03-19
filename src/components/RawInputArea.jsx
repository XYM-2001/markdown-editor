import React from 'react';

const RawInputArea = ({ rawText, handleChangeRawInputedText }) => {
  return (
    <div>
      <h2>Raw Input Area</h2>
      <textarea
        value={rawText}
        onChange={(e) => handleChangeRawInputedText(e.target.value)}
        placeholder="Enter Markdown text here..."
        rows={10}
        cols={50}
      />
    </div>
  );
};

export default RawInputArea;
