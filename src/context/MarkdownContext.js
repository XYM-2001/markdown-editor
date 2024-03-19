// MarkdownContext.js
import React, { createContext, useState } from 'react';
import { Remarkable } from 'remarkable';

// Initialize Remarkable instance
const md = new Remarkable();

// Create the Markdown context
const MarkdownContext = createContext();

const MarkdownProvider = ({ children }) => {
    const [rawText, setRawText] = useState('');

    // Function to convert Markdown text to HTML
    const getMarkDownAsHTMLOutput = (text) => {
        const htmlOutput = md.render(text);
        return htmlOutput;
    };

    return (
        <MarkdownContext.Provider value={{ rawText, getMarkDownAsHTMLOutput }}>
            {children}
        </MarkdownContext.Provider>
    );
};

export { MarkdownContext, MarkdownProvider };
