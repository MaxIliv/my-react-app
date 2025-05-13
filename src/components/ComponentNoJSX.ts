import { createElement } from 'react';

export default function ComponentNoJsx() {
  return (
    createElement('div', { className: 'nojsx?'}, [
      'I am just a text',
      createElement('a', { href: '#' }, ['Click the link'])
    ])
  );
}