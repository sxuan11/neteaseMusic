import React, { useEffect } from 'react';
import { accountLogin2 } from '@/services/login';
import { history } from 'umi';
import styles from './index.less';

const WelcomeToHome: React.FC = () => {
  function login() {
    console.log(123);
    accountLogin2().then((res: any) => {
      console.log(res);
    });
  }

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
