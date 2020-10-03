import React from 'react';

import Auth from '../../modules/Auth';
import Header from '../../modules/Header';

function UniversalTemplate(props) {
  return (
    <div className="universal-template">
      <Auth />
      <Header />
      {props.children}
    </div>
  );
}

export default UniversalTemplate;
