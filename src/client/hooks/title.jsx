
import { useEffect } from 'react';

export default (title) => {
  useEffect(() => {
    const defaultTitle = 'Hello World!';
    document.title = `${title} | ${defaultTitle}`;
    return () => {
      document.title = defaultTitle;
    };
  }, []);
};
