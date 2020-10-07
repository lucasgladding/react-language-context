import React from 'react';

import { useLanguage } from './contexts/language';

function Example() {
  const { translate } = useLanguage();
  return (
    <div>
      {translate('label.username')}
    </div>
  );
}

export default Example;
