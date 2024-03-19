// MarkdownSanitized.jsx
import React from 'react';

const MarkdownSanitized = ({ htmlOutput }) => {
  return (
    <div>
      <h2>Markdown Sanitized Output</h2>
      <div className="markdown-output" dangerouslySetInnerHTML={{ __html: htmlOutput }} />
    </div>
  );
};

export default MarkdownSanitized;
