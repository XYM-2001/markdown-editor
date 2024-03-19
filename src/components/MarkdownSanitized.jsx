import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownSanitized = ({ rawText }) => {
  return (
    <div>
      <h2>Markdown Sanitized Output</h2>
      <div className="markdown-output">
        <ReactMarkdown>{rawText}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownSanitized;
