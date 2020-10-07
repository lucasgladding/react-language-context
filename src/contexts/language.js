import React from 'react';

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

export { LanguageProvider, useLanguageContext };
