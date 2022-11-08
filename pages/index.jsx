import React from 'react';

import styles from './index.module.css';

export default function Home() {
  const items = [
    'item',
    'item',
    'item',
    'item',
    'item',
  ];

  return (
    <div className={styles.container}>
      <ul>
        {items.map((item, index) => (
          <li key={`${item}index`}>
            {' '}
            {`${item}#${index}`}
            {' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
