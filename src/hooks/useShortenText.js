import { useState, useEffect } from 'react';

function shortenText(text, maxLength = 300) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

function useShortenText(initialText, maxLength) {
  const [shortenedText, setShortenedText] = useState(shortenText(initialText, maxLength));

  useEffect(() => {
    setShortenedText(shortenText(initialText, maxLength));
  }, [initialText, maxLength]);

  return shortenedText;
}

export default useShortenText;
