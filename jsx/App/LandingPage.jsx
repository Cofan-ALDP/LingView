import React from 'react';
import { ENGLISH } from './locale/LocaleConstants.jsx';
import { TranslatableText } from './locale/TranslatableText.jsx'

const landingPageJSX = {
  [ENGLISH]:
    <div>
      <p>Welcome! This website is powered by LingView. Click <a href='#/index'>"Index of Texts"</a> to see some example texts.</p>
      <p>To customize this welcome text, edit the jsx/App/LandingPage.jsx file, then run webpack for your changes to take effect. </p>
    </div>,
};

export function LandingPage() {
  return <TranslatableText dictionary={landingPageJSX} />;
}
