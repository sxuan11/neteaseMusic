import React, { useEffect } from 'react';
import {} from '@/services/login';
import { history } from 'umi';
import styles from './index.less';

const WelcomeToHome: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/user/login');
    }, 2000);
  });

  return (
    <div className={styles.title}>
      <div className={styles.tips}>
        <div>网易云音乐 · 音樂的力量</div>
        <div className={styles.small}>网易云音乐支持IPv6网络</div>
      </div>
    </div>
  );
};

export default () => {
  return <WelcomeToHome />;
};
