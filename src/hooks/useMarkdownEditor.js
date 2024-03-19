// useMarkdownEditor.js
import { useState } from 'react';
import MarkdownContext from '../context/MarkdownContext';

const useMarkdownEditor = () => {
    const [rawText, setRawText] = useState('');

    const handleChangeRawInputedText = (text) => {
        setRawText(text);
    };

    const getMarkDownAsHTMLOutput = () => {
        // Implement Markdown to HTML conversion logic here
        return `<div>${rawText}</div>`;
    };

    return { rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput };
};

export default useMarkdownEditor;
