import React from 'react';

import styles from './index.module.css';

export default function Home() {
  const items = [
    'item',
    'item1',
    'item3',
    'item2',
    'item4',
  ];

  return (
    <div className={styles.container}>
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            {' '}
            {`${item}: #${index}`}
            {' '}
          </li>
        ))}
      </ul>
    </div>
  );
}
