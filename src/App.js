// App.js
import React from 'react';
import RawInputArea from './components/RawInputArea';
import MarkdownSanitized from './components/MarkdownSanitized';
import MarkdownContext from './context/MarkdownContext';

const App = () => {
  return (
    <MarkdownContext.Provider value={{ rawText, handleChangeRawInputedText, getMarkDownAsHTMLOutput }}>
      <div className="App">
        <RawInputArea />
        <MarkdownSanitized />
      </div>
    </MarkdownContext.Provider>
  );
};

export default App;
