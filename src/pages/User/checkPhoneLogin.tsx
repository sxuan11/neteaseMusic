import React, { useState } from 'react';
import Style from './login.less';

const CheckPhoneLogin: React.FC = () => {
  return <div className={Style.phoneLogin}>验证验证码</div>;
};

export default () => {
  return <CheckPhoneLogin />;
};
