// App.js
import React from 'react';
import { MarkdownProvider } from './context/MarkdownContext';
import RawInputArea from './components/RawInputArea';
import MarkdownSanitized from './components/MarkdownSanitized';

const App = () => {
  return (
    <MarkdownProvider>
      <div className="App">
        <RawInputArea />
        <MarkdownSanitized />
      </div>
    </MarkdownProvider>
  );
};

export default App;
