// App.js
import React from 'react';
import { MarkdownProvider } from './context/MarkdownContext';
import RawInputArea from './components/RawInputArea';

const App = () => {
  return (
    <MarkdownProvider>
      <div className="App">
        <RawInputArea />
      </div>
    </MarkdownProvider>
  );
};

export default App;
