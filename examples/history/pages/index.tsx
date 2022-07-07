import React from 'react';
import styles from './index.less';
import { history } from 'umi';

console.log('history outside Page component', history);

export default function Page() {
  console.log('history in Page component', history);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
