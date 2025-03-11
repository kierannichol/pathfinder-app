import * as React from 'react';

interface DetailsProps {
 children: React.ReactNode;
}

export function Details({children}: DetailsProps) {
  const detailsRef = React.useRef<HTMLDetailsElement>(null);

  function handleToggle() {

  }

  return (
  <details ref={detailsRef} onToggle={handleToggle}>
    {children}
  </details>
 )
}