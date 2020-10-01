import React from 'react';

import Header from '../../modules/Header';

function UniversalTemplate(props) {
  return (
    <div className="universal-template">
      <Header />
      {props.children}
    </div>
  );
}

export default UniversalTemplate;
