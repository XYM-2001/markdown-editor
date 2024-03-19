// App.js
import React from 'react';
import { MarkdownProvider } from './context/MarkdownContext';
import RawInputArea from './components/RawInputArea';
<<<<<<< HEAD
=======
import MarkdownSanitized from './components/MarkdownSanitized';
>>>>>>> cf259e0313a8fce5444c528644975ef1236c61af

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
