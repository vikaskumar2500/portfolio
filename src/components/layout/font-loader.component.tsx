'use client';

import { memo, useEffect } from 'react';

const FontLoaderComponent = () => {
  useEffect(() => {
    // Prevents duplicate loading
    if (document.querySelector('#RobotoMonoLink')) {
      return;
    }

    const timer = setTimeout(() => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = 'RobotoMonoLink';
      link.href =
        'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400..700&display=swap';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }); // Delay of 1 second

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return <></>;
};

export const FontLoader = memo(FontLoaderComponent);
