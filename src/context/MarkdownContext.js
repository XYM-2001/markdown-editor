// MarkdownContext.js
import React from 'react';

const MarkdownContext = React.createContext({
    rawText: '',
    handleChangeRawInputedText: () => { },
    getMarkDownAsHTMLOutput: () => { },
});

export default MarkdownContext;
