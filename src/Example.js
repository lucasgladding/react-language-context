import React from 'react';

import { useLanguage } from './contexts/language';

const styles = {
  language: {
    margin: '1rem',
  },
  text: {
    background: '#eee',
    border: '1px solid black',
    borderRadius: 2,
    margin: '1rem',
    padding: 10,
  },
};

function Example() {
  const { translate, setLanguage } = useLanguage();
  return (
    <div>
      <div style={styles.language}>
        <select onChange={(event) => setLanguage(event.target.value)}>
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
      </div>
      <div style={styles.text}>
        {translate('label.username')}
      </div>
    </div>
  );
}

export default Example;
