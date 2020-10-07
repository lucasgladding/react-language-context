import { useLanguageContext } from '../contexts/language';
import Language from '../services/Language';

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

export default useLanguage;
