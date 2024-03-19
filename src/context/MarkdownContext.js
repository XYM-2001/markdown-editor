// MarkdownContext.js
<<<<<<< HEAD
import React, { createContext } from 'react';
=======
import React, { createContext, useState } from 'react';
>>>>>>> cf259e0313a8fce5444c528644975ef1236c61af
import { Remarkable } from 'remarkable';

// Initialize Remarkable instance
const md = new Remarkable();

// Create the Markdown context
const MarkdownContext = createContext();

const MarkdownProvider = ({ children }) => {
<<<<<<< HEAD
=======
    const [rawText, setRawText] = useState('');
>>>>>>> cf259e0313a8fce5444c528644975ef1236c61af

    // Function to convert Markdown text to HTML
    const getMarkDownAsHTMLOutput = (text) => {
        const htmlOutput = md.render(text);
        return htmlOutput;
    };

    return (
<<<<<<< HEAD
        <MarkdownContext.Provider value={{ getMarkDownAsHTMLOutput }}>
=======
        <MarkdownContext.Provider value={{ rawText, getMarkDownAsHTMLOutput }}>
>>>>>>> cf259e0313a8fce5444c528644975ef1236c61af
            {children}
        </MarkdownContext.Provider>
    );
};

export { MarkdownContext, MarkdownProvider };
