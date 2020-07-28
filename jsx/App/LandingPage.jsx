import React from 'react';

export function LandingPage() {
  return (
      <div style={{margin: "0.5in"}}>
          <p>Welcome! This website is powered by LingView. Click <a href='#/index'>"Index of Texts"</a> to see some example texts.</p>
          <p>To customize this welcome text, edit the jsx/App/LandingPage.jsx file, then run webpack for your changes to take effect. </p>
      </div>
  );
}