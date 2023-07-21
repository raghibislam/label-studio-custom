// src/App.js
import React from 'react';
// import LabelStudioWrapper from './Components/IframeApp';
// import FinalApp from './Actions/ExampleAnnotation';
import TextAnnotation from './Components/TextAnnotation';

function App() {
  return (
    <div>
      <h1>Text Annotation App</h1>
      {/* <LabelStudioWrapper/> */}
      <TextAnnotation/>
      {/* <FinalApp/> */}
    </div>
  );
}

export default App;
