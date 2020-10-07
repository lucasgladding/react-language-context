import React from 'react';

import Language from '../services/Language';

const LanguageContext = React.createContext();

function reducer(_, action) {
  switch (action.type) {
    case 'set': {
      return { language: action.language };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LanguageProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, { language: 'en' });
  return (
    <LanguageContext.Provider value={[state, dispatch]}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguageContext() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageContext');
  }
  return context;
}

function useLanguage() {
  const [state, dispatch] = useLanguageContext();

  function translate(name) {
    return (new Language(state.language)).translate(name);
  }

  function setLanguage(language) {
    dispatch({ type: 'set', language });
  }

  return { translate, setLanguage };
}

export { LanguageProvider, useLanguage };
