import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function DocsPage() {
  const iframeSrc =
    '<iframe src="http://nrv-backend.4lesson.ru/wiki?title=Main_Page" height="100%" width="100%"></iframe>';

  const iframe = () => {
    return {
      __html: iframeSrc,
    };
  };

  return (
    <div
      dangerouslySetInnerHTML={iframe()}
      style={{ height: '100%', width: '100%' }}
    />
  );
}
