import React from 'react';

import { LanguageProvider } from './contexts/language';

import Example from './Example';

function App() {
  return (
    <LanguageProvider>
      <Example />
    </LanguageProvider>
  );
}

export default App;
