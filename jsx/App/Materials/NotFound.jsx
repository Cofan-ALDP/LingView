import React from 'react';
import { TranslatableText } from '../locale/TranslatableText.jsx';
import { materialsPageNotFound } from '../locale/LocaleConstants.jsx';

export function NotFound() {
  return (
    <p><TranslatableText dictionary={materialsPageNotFound} /></p>
  );
}
