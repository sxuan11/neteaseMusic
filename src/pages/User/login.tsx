import React, { useEffect } from 'react';
import Style from './login.less';
import { history } from 'umi';
import { Button } from 'antd';

const LoginForm: React.FC = () => {
  const toPhoneLogin = () => {
    history.push('/user/login/phone');
  };

  const toEMailLogin = () => {
    history.push('/user/login/email');
  };

  return (
    <div className={Style.btnBox}>
      <Button
        size={'large'}
        style={{ width: '70%' }}
        shape="round"
        onClick={toPhoneLogin}
      >
        <div className={`font-red font-bold`}>手机号登录</div>
      </Button>
      <Button
        size={'large'}
        style={{ width: '70%', marginTop: 10 }}
        shape="round"
        onClick={toEMailLogin}
      >
        <div className={`font-red font-bold`}>网易邮箱登录</div>
      </Button>
    </div>
  );
};

const Login: React.FC = () => {
  useEffect(() => {});

  return (
    <div className={Style.title}>
      <LoginForm />
    </div>
  );
};

export default () => {
  return <Login />;
};
