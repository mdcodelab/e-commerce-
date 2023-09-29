import React from 'react';
import Header from './Header';

function Page({children}) {
  return (
    <div>
    <Header></Header>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

export default Page;
