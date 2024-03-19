import { useState } from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown library
import MarkdownContext from '../context/MarkdownContext';

const useMarkdownEditor = () => {
    const [rawText, setRawText] = useState('');

    const handleChangeRawInputedText = (text) => {
        setRawText(text);
    };

    const getMarkDownAsHTMLOutput = () => {
        // Use ReactMarkdown to convert Markdown to HTML
        return <ReactMarkdown>{rawText}</ReactMarkdown>;
    };

    return { rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput };
};

export default useMarkdownEditor;
